<template>
    <div class="space-y-8 p-8 shadow">
        <div class="flex items-center mb-8 min-h-[120px] justify-between">
            <div class="flex items-center">
                <div
                    class="w-[120px] h-[120px] bg-[#3620101A] rounded-full"
                ></div>
                <div class="ml-6">
                    <p class="text-brown-500 font-bold text-lg">
                        {{ userInfo.studentId }}
                    </p>
                    <h1 class="text-4xl font-bold text-brown-500 mb-2">
                        {{ userInfo.name }}
                    </h1>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-around ml-6">
                <div class="flex items-center mb-4 gap-x-2">
                    <div
                        class="bg-green-600 text-white font-bold rounded-2xl p-2"
                    >
                        學習進行中
                    </div>
                    <div class="bg-brown text-white font-bold rounded-2xl p-2">
                        關鍵探索期
                    </div>
                </div>
                <div class="flex items-center gap-x-2">
                    <div
                        class="bg-orange-500 text-white font-bold rounded-2xl p-1 text-sm"
                    >
                        反轉養成
                    </div>
                    <div
                        class="bg-green-700 text-white font-bold rounded-2xl p-1 text-sm"
                    >
                        一年期
                    </div>
                </div>
            </div>
            <div>
                <CircularProgress
                    :value="62"
                    color="yellow"
                    size="huge"
                    bg-color="#E2DFD7"
                >
                    <div>
                        <div class="text-brown text-center text-4xl font-black">
                            62
                        </div>
                        <div
                            class="text-brown text-center text-[12px] font-bold"
                        >
                            學習評分
                        </div>
                    </div>
                </CircularProgress>
            </div>
        </div>
        <div class="mt-8 flex-1">
            <div class="font-bold text-brown text-2xl">學習曲線</div>
            <ActivityHeatmap />
        </div>
        <div class="mt-8 flex-1">
            <div class="font-bold text-brown text-2xl mb-4">學習任務狀況</div>
            <div class="grid grid-cols-4">
                <div class="col-span-1">
                    <LearningMission title="快朗" color="bg-red-300" />
                </div>
                <div class="col-span-1">
                    <LearningMission title="組織圖" color="bg-yellow-400" />
                </div>
                <div class="col-span-1">
                    <LearningMission title="關鍵字" color="bg-green-700" />
                </div>
                <div class="col-span-1">
                    <LearningMission title="必修課" color="bg-blue-500" />
                </div>
            </div>
        </div>
        <div>
            <div class="font-extrabold text-brown text-2xl mb-4">
                <div>
                    過往預約狀況
                </div>
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
        <div>
            <div class="font-extrabold text-brown text-2xl mb-4">
                過往學習週期狀況
            </div>
            <div class="gap-y-4 flex flex-col">
                <LearningInterval
                    v-for="(record, index) in learningIntervals"
                    :key="index"
                    :title="record.title"
                    :count="record.count"
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

// 帳號記錄列表
const accountRecords = ref([
    {
        title: '快朗',
        tags: [
            { text: '口說', color: 'bg-red-400' },
            { text: '練習', color: 'bg-yellow-400' },
        ],
        date: '2012年12月1日 20:00',
        status: '預約待確認',
        statusColor: 'bg-red-500',
    },
    {
        title: '學習解惑',
        tags: [
            { text: '口說', color: 'bg-red-400' },
            { text: '練習', color: 'bg-yellow-400' },
        ],
        date: '2012年12月1日 20:00',
        status: '已預約',
        statusColor: 'bg-green-700',
    },
    {
        title: '學習解惑',
        tags: [
            { text: '口說', color: 'bg-red-400' },
            { text: '練習', color: 'bg-yellow-400' },
        ],
        date: '2012年12月1日 20:00',
        status: '已完成',
        statusColor: 'bg-gray-300',
    },
    {
        title: '快朗',
        tags: [
            { text: '口說', color: 'bg-red-400' },
            { text: '練習', color: 'bg-yellow-400' },
        ],
        date: '2012年12月1日 20:00',
        status: '已預約',
        statusColor: 'bg-blue-500',
    },
    {
        title: '口說練習',
        tags: [
            { text: '口說', color: 'bg-red-400' },
            { text: '練習', color: 'bg-yellow-400' },
        ],
        date: '2012年12月1日 20:00',
        status: '已預約',
        statusColor: 'bg-blue-500',
    },
]);

// 學習週期列表
const learningIntervals = ref([
    {
        title: '關鍵探索期 ① ',
        tags: [{ text: '口說', color: 'bg-red-400' }],
        content: '本期目標，截取內容前30字的內容。',
        count: '62',
        date: '2012年12月1日 20:00',
        status: '學習正常',
        statusColor: 'bg-green-600',
    },
    {
        title: '關鍵探索期 ① ',
        tags: [{ text: '口說', color: 'bg-red-400' }],
        content: '本期目標，截取內容前30字的內容。',
        count: '54',
        date: '2012年12月1日 20:00',
        status: '需要注意',
        statusColor: 'bg-yellow-400',
    },
    {
        title: '關鍵探索期 ① ',
        tags: [{ text: '口說', color: 'bg-red-400' }],
        content: '本期目標，截取內容前30字的內容。',
        count: '23',
        date: '2012年12月1日 20:00',
        status: '問題發生',
        statusColor: 'bg-red-500',
    },
]);
</script>

<style scoped>
/* 任何額外的樣式可以在這裡添加 */
</style>
