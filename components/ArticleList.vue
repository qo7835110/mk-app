<script setup>
const tagColorMap = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-stone-200 text-stone-700',
    lightGray: 'bg-stone-100 text-stone-600'
}

const posts = ref([
    {
        id: 1,
        author: { name: '使用者暱稱', avatar: null },
        date: '2025.10.15',
        title: '【11月課程異動】',
        excerpt: '各位學員晚安，這是11月份的聚樂部相關課程異動，煩請學員注意相關的課程時間。',
        thumbnail: null,
        stats: {
            comments: 111,
            likes: 120
        },
        tags: [
            { label: '課程公告', color: 'green' },
            { label: '票券部', color: 'green' },
            { label: '日文', color: 'gray' },
            { label: '雜文', color: 'lightGray' }
        ]
    },
    {
        id: 2,
        author: { name: '使用者暱稱', avatar: null },
        date: '2025.10.14',
        title: '關於日文學習......',
        excerpt: '哈囉，小弟是最近成為學員的初學者，想問問一些問題，不知道大家是怎麼想的...',
        thumbnail: null,
        stats: {
            comments: 23,
            likes: 26
        },
        tags: [
            { label: '日文', color: 'gray' },
            { label: '疑難雜症', color: 'blue' }
        ]
    },
    {
        id: 1,
        author: { name: '使用者暱稱', avatar: null },
        date: '2025.10.15',
        title: '【11月課程異動】',
        excerpt: '各位學員晚安，這是11月份的聚樂部相關課程異動，煩請學員注意相關的課程時間。',
        thumbnail: null,
        stats: {
            comments: 111,
            likes: 120
        },
        tags: [
            { label: '課程公告', color: 'green' },
            { label: '票券部', color: 'green' },
            { label: '日文', color: 'gray' },
            { label: '雜文', color: 'lightGray' }
        ]
    },
    {
        id: 2,
        author: { name: '使用者暱稱', avatar: null },
        date: '2025.10.14',
        title: '關於日文學習......',
        excerpt: '哈囉，小弟是最近成為學員的初學者，想問問一些問題，不知道大家是怎麼想的...',
        thumbnail: null,
        stats: {
            comments: 23,
            likes: 26
        },
        tags: [
            { label: '日文', color: 'gray' },
            { label: '疑難雜症', color: 'blue' }
        ]
    }
])
</script>

<template>
    <div class="bg-orange-50/50 p-4 font-sans sm:p-8">
        <div class="mx-auto h-[350px] max-w-4xl space-y-4 overflow-auto overflow-x-hidden">
            <article
                v-for="post in posts"
                :key="post.id"
                class="flex h-[160px] flex-col gap-4 rounded-lg bg-white/0 p-2 sm:flex-row sm:gap-6 sm:p-4"
            >
                <div
                    class="aspect-video w-full flex-shrink-0 rounded-xl bg-[#E5E2DA] sm:aspect-square sm:h-20 sm:w-32"
                ></div>
                <div>
                    <div class="flex flex-1 flex-col">
                        <div class="flex items-center gap-x-2">
                            <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                                <div class="h-5 w-5 flex-shrink-0 rounded-full bg-stone-200"></div>
                                <span class="text-xs font-medium text-stone-600">{{
                                    post.author.name
                                }}</span>
                                <time class="text-xs text-stone-400">{{ post.date }}</time>
                            </div>

                            <div class="flex flex-wrap items-center gap-1.5">
                                <span
                                    v-for="tag in post.tags"
                                    :key="tag.label"
                                    class="rounded-full px-2 py-0.5 text-xs font-semibold"
                                    :class="tagColorMap[tag.color] || tagColorMap.gray"
                                >
                                    {{ tag.label }}
                                </span>
                            </div>
                        </div>

                        <h2
                            class="mt-3 cursor-pointer text-base text-brown-800 font-black hover:text-black sm:text-lg"
                        >
                            {{ post.title }}
                        </h2>

                        <p
                            class="mt-1 hidden overflow-hidden text-sm text-ellipsis whitespace-nowrap text-brown-800 font-black sm:block"
                        >
                            {{ post.excerpt }}
                        </p>
                    </div>
                    <div class="mt-2 flex items-center justify-between sm:mt-2 sm:pt-2">
                        <div class="flex items-center gap-4 text-sm text-stone-600">
                            <span class="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                                {{ post.stats.comments }}
                            </span>
                            <span class="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                {{ post.stats.likes }}
                            </span>
                            <span class="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                                收藏
                            </span>
                        </div>
                        <a
                            href="/visitor/mkLobbyArticle"
                            class="flex items-center gap-1 font-black text-brown hover:text-black"
                        >
                            詳看全文
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="3"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
