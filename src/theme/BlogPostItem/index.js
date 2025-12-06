import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function BlogPostItemWrapper(props) {
    const { colorMode } = useColorMode();

    return (
        <>
            <BlogPostItem {...props} />
            {/* Only show comments on the actual blog post page, not on the list view */}
            {props.children.type.frontMatter && (
                <div style={{ marginTop: '50px' }}>
                    <h3>Comments</h3>
                    <Giscus
                        id="comments"
                        repo="akki4u01/topicly"
                        repoId="R_kgDOPvmpbA"
                        category="General"
                        categoryId="DIC_kwDOPvmpbM4CzenN"
                        mapping="pathname"
                        term="Welcome to my blog!"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme={colorMode}
                        lang="en"
                        loading="lazy"
                    />
                    <div style={{ fontSize: '0.8rem', color: 'gray', marginTop: '10px' }}>
                        Note: To post a comment, you must be logged in to GitHub. Maximum 3 comments per day is enforced by platform policy.
                    </div>
                </div>
            )}
        </>
    );
}
