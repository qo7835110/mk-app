<template>
    <div class="space-y-8 p-8 shadow">
        <!-- 主要內容區域 -->
        <UserProfileCard :user-info="userInfo" :stats="learningStats" />
        <div>
            <div class="font-extrabold text-brown-600 text-2xl mb-4">
                規劃標籤備註
            </div>
            <div class="w-full min-h-[4rem] bg-brown-100 rounded-xl"></div>
        </div>
        <div>
            <div class="font-extrabold text-brown-600 text-2xl mb-4">
                帳號紀錄
            </div>
            <div class="gap-y-4 flex flex-col">
                <div
                    class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
                >
                    <div class="text-brown font-bold text-xl">請假申請</div>
                    <div class="flex-1 flex items-center">
                        <div class="flex items-center gap-x-2 mr-4">
                            <div
                                class="bg-blue-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                            <div
                                class="bg-yellow-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                        </div>
                        <div class="text-brown-400">2012年12月1日 20:00</div>
                    </div>
                    <div
                        class="bg-blue-500 text-white font-bold py-2 px-5 rounded-2xl text-sm"
                    >
                        待確認
                    </div>
                </div>
                <div
                    class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
                >
                    <div class="text-brown font-bold text-xl">請假申請</div>
                    <div class="flex-1 flex items-center">
                        <div class="flex items-center gap-x-2 mr-4">
                            <div
                                class="bg-blue-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                            <div
                                class="bg-yellow-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                        </div>
                        <div class="text-brown-400">2012年12月1日 20:00</div>
                    </div>
                    <div
                        class="bg-blue-500 text-white font-bold py-2 px-5 rounded-2xl text-sm"
                    >
                        待確認
                    </div>
                </div>
                <div
                    class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
                >
                    <div class="text-brown font-bold text-xl">請假申請</div>
                    <div class="flex-1 flex items-center">
                        <div class="flex items-center gap-x-2 mr-4">
                            <div
                                class="bg-blue-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                            <div
                                class="bg-yellow-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                        </div>
                        <div class="text-brown-400">2012年12月1日 20:00</div>
                    </div>
                    <div
                        class="bg-blue-500 text-white font-bold py-2 px-5 rounded-2xl text-sm"
                    >
                        待確認
                    </div>
                </div>
                <div
                    class="flex items-center justify-between py-4 px-3 rounded-xl bg-white shadow w-full gap-x-5"
                >
                    <div class="text-brown font-bold text-xl">請假申請</div>
                    <div class="flex-1 flex items-center">
                        <div class="flex items-center gap-x-2 mr-4">
                            <div
                                class="bg-blue-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                            <div
                                class="bg-yellow-500 text-white font-bold py-1 px-2 rounded-2xl text-[10px]"
                            >
                                請假申請
                            </div>
                        </div>
                        <div class="text-brown-400">2012年12月1日 20:00</div>
                    </div>
                    <div
                        class="bg-blue-500 text-white font-bold py-2 px-5 rounded-2xl text-sm"
                    >
                        待確認
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 設置頁面 meta
useHead({
    title: '個人資訊 - MK 翻轉外語',
    meta: [
        {
            name: 'description',
            content: '管理您的個人資料、學習進度和課程資訊',
        },
    ],
});

// 用戶基本資訊
const userInfo = ref({
    name: '姜小文',
    studentId: '2017010001',
    avatar: '/assets/images/avatar.png',
});

// 學習統計數據
const learningStats = ref({
    coursesInProgress: 62,
    dailyStudyTime: 324,
    totalStudyDays: 30,
});

// 個人詳細資訊
const personalInfo = ref({
    name: '姜小文',
    studentId: '第一',
    birthday: '1981/03/02',
    major: '教育',
    school: '淡江大學',
    department: '教育心理學',
    internship: '教育心理學',
});

// 聯絡資訊
const contactInfo = ref({
    address: '桃園市中壢區320中山路1855號1樓',
    phone: '0912-345-678',
    email: 'mkreversal@gmail.com',
});

// 學習資訊
const learningInfo = ref({
    teachingUnit: '日文',
    counseling: '調整工作準備',
    learningPlan: '0912-345-678',
    preferredCategory: 'A1',
});

// 課程列表
const courseList = ref([
    {
        id: 1,
        name: '程式設計',
        difficultyTags: [{ text: '初級程度', level: 'beginner' }],
        lastUpdated: 'YYYY年MM月DD日 HH:mm',
    },
    {
        id: 2,
        name: '推薦CAT',
        difficultyTags: [{ text: '基礎程度', level: 'basic' }],
        lastUpdated: 'YYYY年MM月DD日 HH:mm',
    },
    {
        id: 3,
        name: '商法學習',
        difficultyTags: [{ text: '多項基礎', level: 'multiple-basic' }],
        lastUpdated: 'YYYY年MM月DD日 HH:mm',
    },
    {
        id: 4,
        name: '日語',
        difficultyTags: [{ text: '基礎程度', level: 'basic' }],
        lastUpdated: 'YYYY年MM月DD日 HH:mm',
    },
    {
        id: 5,
        name: '韓語社會',
        difficultyTags: [{ text: '基礎程度', level: 'basic' }],
        lastUpdated: 'YYYY年MM月DD日 HH:mm',
    },
]);
</script>

<style scoped>
/* 任何額外的樣式可以在這裡添加 */
</style>
