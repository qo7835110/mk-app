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
                <LogItem
                    v-for="(record, index) in accountRecords"
                    :key="index"
                    :title="record.title"
                    :tags="record.tags"
                    :date="record.date"
                    :status="record.status"
                    :status-color="record.statusColor"
                />
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

// 帳號記錄工廠函數
function createAccountRecord({ title, tags, date, status, statusColor }) {
    return { title, tags, date, status, statusColor };
}

// 帳號記錄列表
const accountRecords = ref([
    createAccountRecord({
        title: '請假申請',
        tags: [
            { text: '請假申請', color: 'bg-blue-500' },
            { text: '病假', color: 'bg-yellow-500' }
        ],
        date: '2012年12月1日 20:00',
        status: '待確認',
        statusColor: 'bg-blue-500'
    }),
    createAccountRecord({
        title: '補課申請',
        tags: [
            { text: '補課', color: 'bg-green-500' },
            { text: '補課申請', color: 'bg-yellow-500' }
        ],
        date: '2013年1月5日 09:30',
        status: '已完成',
        statusColor: 'bg-green-500'
    }),
    createAccountRecord({
        title: '資料修改',
        tags: [
            { text: '個人資料', color: 'bg-purple-500' }
        ],
        date: '2014年5月10日 14:20',
        status: '待確認',
        statusColor: 'bg-blue-500'
    }),
    createAccountRecord({
        title: '請假申請',
        tags: [
            { text: '事假', color: 'bg-blue-500' },
            { text: '請假申請', color: 'bg-yellow-500' }
        ],
        date: '2015年8月21日 18:00',
        status: '已拒絕',
        statusColor: 'bg-red-500'
    })
]);
</script>

<style scoped>
/* 任何額外的樣式可以在這裡添加 */
</style>
