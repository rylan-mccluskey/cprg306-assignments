"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn() {
        await gitHubSignIn();
    }
    
    async function handleSignOut() {
        await firebaseSignOut();
    }
    
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">Home </Link>
                    <Link href="/week-9/shopping-list">Shopping List</Link>
                </nav>
                <div>
                    {user ? (
                        <button onClick={handleSignOut}>Sign Out</button>
                    ) : (
                        <button onClick={handleSignIn}>Sign In</button>
                    )}
                </div>
            </header>
            <main>
                {user ? <p>Welcome, {user.displayName} ({user.email})</p> : <p>Please sign in</p>}
            </main>
        </div>
    );
} 