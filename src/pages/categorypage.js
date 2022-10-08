import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import BlogFirstItem from "../components/blog/BlogFirstItem"
import BlogItem from "../components/blog/BlogItem"

const CategoryPage = () => (
    <Layout>

        <div className="max-w-7xl mx-auto px-4 py-16">
            <div class="grid md:grid-flow-row-dense lg:grid-cols-4 grid-cols-1 grid-rows-1 gap-6">
                <div class="lg:col-span-2 col-span-1">
                    <BlogFirstItem />
                </div>
                <div className="gap-6 flex flex-col">
                    <BlogItem />
                    <BlogItem />
                </div>
                <div className="gap-6 flex flex-col">
                    <BlogItem />
                    <BlogItem />
                </div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>

       </div>
    </Layout>
)

export default CategoryPage