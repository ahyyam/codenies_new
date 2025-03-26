import React from "react";
import { updateSession } from "./supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const sessionUpdate = await updateSession(request);

    // Ensure a valid response is returned
    if (!sessionUpdate) {
      console.error("Session update failed:", sessionUpdate);
      return NextResponse.json(
        { error: "Session update failed" },
        { status: 500 }
      );
    }

    return sessionUpdate;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Middleware invocation failed" },
      { status: 500 }
    );
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
