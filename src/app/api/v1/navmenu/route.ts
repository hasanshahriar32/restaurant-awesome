import { join } from "path";
import { NextResponse } from "next/server";
// Import the menu directly without using 'import' inside the function
const { navmenu } = require("/db");

export async function GET() {
  try {
    const jsonString = JSON.stringify(navmenu);

    // Return the data in the response
    return new NextResponse(jsonString, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching or parsing JSON file:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
