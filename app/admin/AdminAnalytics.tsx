"use client";

import React, { useState, useEffect, useCallback } from "react";

interface AnalyticsData {
  lastUpdated: string;
  totals: {
    pageViews: number;
    uniqueVisitors: number;
  };
  daily: {
    [date: string]: {
      pageViews: number;
      uniqueVisitors: number;
    };
  };
  pages: { [path: string]: number };
  referrers: { [referrer: string]: number };
}

export default function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchAnalytics = useCallback(async (isRefresh = false) => {
    if (isRefresh) setIsRefreshing(true);
    else setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/analytics");
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Unauthorized access. Admin role required.");
        }
        throw new Error("Failed to fetch analytics statistics.");
      }
      const json = await res.json();
      setData(json);
    } catch (err: unknown) {
      console.error(err);
      const errMsg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(errMsg);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (active) {
        fetchAnalytics();
      }
    }, 0);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [fetchAnalytics]);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <p style={{ color: "var(--accent-gold)", fontSize: "1.1rem", fontFamily: "var(--font-inter)", letterSpacing: "0.1em" }}>
          COMPILING SITE VISITS...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", border: "1px solid rgba(239, 68, 68, 0.3)", background: "rgba(239, 68, 68, 0.05)", borderRadius: "12px" }}>
        <p style={{ color: "#ef4444", fontSize: "0.95rem", margin: 0 }}>{error}</p>
        <button 
          onClick={() => fetchAnalytics()} 
          style={{ 
            marginTop: "1rem", 
            background: "rgba(255,255,255,0.1)", 
            color: "white", 
            padding: "0.5rem 1rem", 
            borderRadius: "4px", 
            fontSize: "0.8rem", 
            cursor: "pointer" 
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data) return null;

  // Prepare sorted lists
  const sortedPages = Object.entries(data.pages).sort((a, b) => b[1] - a[1]);
  const sortedReferrers = Object.entries(data.referrers).sort((a, b) => b[1] - a[1]);
  const sortedDaily = Object.entries(data.daily).sort((a, b) => b[0].localeCompare(a[0]));

  const avgViewsPerVisitor = data.totals.uniqueVisitors > 0 
    ? (data.totals.pageViews / data.totals.uniqueVisitors).toFixed(1) 
    : "0";

  return (
    <div>
      {/* Top Header Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.85rem", color: "rgba(245, 240, 225, 0.5)" }}>
          Last Compiled: {new Date(data.lastUpdated).toLocaleString()}
        </div>
        <button 
          onClick={() => fetchAnalytics(true)}
          disabled={isRefreshing}
          style={{
            background: isRefreshing ? "rgba(255, 255, 255, 0.05)" : "rgba(226, 179, 90, 0.1)",
            border: "1px solid var(--accent-gold)",
            color: "var(--accent-gold)",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            letterSpacing: "0.05em",
            cursor: isRefreshing ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          {isRefreshing ? "COMPILING..." : "COMPILE RECENT TRAFFIC"}
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        {/* Card 1 */}
        <div style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
            TOTAL PAGE VIEWS
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--accent-gold)", fontFamily: "var(--font-playfair)" }}>
            {data.totals.pageViews.toLocaleString()}
          </div>
        </div>

        {/* Card 2 */}
        <div style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
            UNIQUE VISITORS
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", fontFamily: "var(--font-playfair)" }}>
            {data.totals.uniqueVisitors.toLocaleString()}
          </div>
        </div>

        {/* Card 3 */}
        <div style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
            PAGES / VISITOR
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", fontFamily: "var(--font-playfair)" }}>
            {avgViewsPerVisitor}
          </div>
        </div>
      </div>

      {/* Pages and Referrers Lists */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {/* Top Pages Box */}
        <div style={{
          background: "rgba(255, 255, 255, 0.01)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem"
        }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--accent-gold)", marginBottom: "1.2rem", letterSpacing: "0.05em" }}>
            Top Visited Pages
          </h3>
          {sortedPages.length === 0 ? (
            <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.9rem" }}>No page views logged yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {sortedPages.map(([path, count], idx) => (
                <div key={path} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <span style={{ color: "var(--accent-gold)", fontWeight: "bold", width: "1.5rem" }}>#{idx + 1}</span>
                    <span style={{ color: "white", fontFamily: "monospace" }}>{path}</span>
                  </div>
                  <div style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: "600" }}>{count} views</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Referrers Box */}
        <div style={{
          background: "rgba(255, 255, 255, 0.01)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem"
        }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--accent-gold)", marginBottom: "1.2rem", letterSpacing: "0.05em" }}>
            Traffic Sources
          </h3>
          {sortedReferrers.length === 0 ? (
            <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.9rem" }}>No external referrers logged yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {sortedReferrers.map(([ref, count], idx) => (
                <div key={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <span style={{ color: "rgba(255, 255, 255, 0.3)", width: "1.5rem" }}>{idx + 1}</span>
                    <span style={{ color: "white" }}>{ref}</span>
                  </div>
                  <div style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: "600" }}>{count} referrals</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Daily Breakdown Table */}
      <div style={{
        background: "rgba(255, 255, 255, 0.01)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        padding: "1.5rem"
      }}>
        <h3 style={{ fontSize: "1.1rem", color: "var(--accent-gold)", marginBottom: "1.2rem", letterSpacing: "0.05em" }}>
          Daily Traffic Logs
        </h3>
        {sortedDaily.length === 0 ? (
          <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.9rem" }}>No daily traffic records found.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)" }}>Date</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)" }}>Page Views</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)" }}>Unique Visitors</th>
                </tr>
              </thead>
              <tbody>
                {sortedDaily.map(([date, stats]) => (
                  <tr key={date} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <td style={{ padding: "0.75rem 1rem", color: "white", fontWeight: "bold" }}>
                      {new Date(date + "T00:00:00").toLocaleDateString(undefined, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--accent-gold)" }}>{stats.pageViews}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "white" }}>{stats.uniqueVisitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
