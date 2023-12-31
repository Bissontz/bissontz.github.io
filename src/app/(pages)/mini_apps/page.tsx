import React from "react";
import Layout from "../../components/layout";
import Link from "next/link";

const MiniAppsPage = () => (
    <Layout>
        <h1>Under Construction</h1>
        <p>I gained a ton of inspiration for these from 
            <a href="http://neal.fun"> neal.fun</a> 
        </p>
        <div className="divider"/>
        <div className="grid gap-4 grid-cols-2">
            <button className="btn">Color Guesser Game</button>
            <Link href="mini_apps/maze_runner"><button className="btn">Maze Runner</button></Link>
            <button className="btn">Mini App 3</button>
            <button className="btn">Mini App 4</button>
            <button className="btn">Mini App 5</button>
        </div>
    </Layout>
);

export default MiniAppsPage;