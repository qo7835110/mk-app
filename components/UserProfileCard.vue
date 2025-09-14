<template>
    <div class="p-6 flex w-[1080px] mb-8">
        <!-- 個人頭像與基本資訊 -->
        <div class="flex flex-col justify-between items-center w-[240px]">
            <div class="size-[200px] rounded-full bg-[#3620101A]"></div>
            <h2 class="text-3xl font-bold text-brown-500 my-2">
                {{ userInfo.name }}
            </h2>
            <p class="text-brown-500 font-bold text-lg mb-6">
                {{ userInfo.studentId }}
            </p>
            <!-- 評分 -->
            <div class="self-start w-full">
                <div class="">
                    <div class="text-brown-800">
                        學習評分 <span class="font-bold text-[24px]">62</span>分
                    </div>
                    <ProgressBar
                        :current="62"
                        :total="100"
                        unit="分"
                        :showText="false"
                        :progress-color="'bg-[#FFC649]'"
                    />
                </div>
                <div class="">
                    <div class="text-brown-800">
                        學習契約剩餘
                        <span class="font-bold text-[24px]">324</span>天
                    </div>
                    <ProgressBar
                        :current="365 - 324"
                        :total="365"
                        unit="天"
                        :showText="false"
                        :progress-color="'bg-[#21A07D]'"
                    />
                </div>
                <div class="">
                    <div class="text-brown-800">
                        假期剩餘 <span class="font-bold text-[24px]">30</span>天
                    </div>
                    <ProgressBar
                        :current="10"
                        :total="365"
                        unit="天"
                        :showText="false"
                        :progress-color="'bg-[#A4A4A4]'"
                    />
                </div>
            </div>
            <!-- 操作按鈕 -->
            <div class="flex justify-between w-full mt-5">
                <button
                    class="flex flex-1 justify-center text-white font-bold items-center gap-2 bg-brown-300 text-brown-800 py-2 rounded-xl hover:bg-brown-500 transition-colors mr-4"
                >
                    師資更換
                </button>
                <button
                    class="flex flex-1 justify-center text-white font-bold items-center gap-2 bg-brown-500 text-brown-800 py-2 rounded-xl hover:bg-brown-700 transition-colors"
                >
                    報價單與契約
                </button>
            </div>
        </div>
        <div class="flex-1 ml-10">
            <div class="text-brown-600">
                <div class="font-black text-2xl mb-5">帳號資訊</div>
                <div
                    class="flex items-center font-medium gap-x-2 justify-between"
                >
                    <div class="flex items-center gap-x-2">
                        <div>使用者暱稱: Maaku</div>
                        <button
                            class="flex flex-1 justify-center text-white font-bold items-center gap-2 bg-brown-500 text-brown-800 py-2 rounded-xl hover:bg-brown-700 transition-colors px-3"
                        >
                            暱稱更改
                        </button>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <div>登入密碼</div>
                        <button
                            class="flex flex-1 justify-center text-white font-bold items-center gap-2 bg-brown-500 text-brown-800 py-2 rounded-xl hover:bg-brown-700 transition-colors px-3"
                        >
                            密碼更改
                        </button>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <div>帳號權限: 學員 - 0</div>
                        <button
                            class="flex flex-1 justify-center text-white font-bold items-center gap-2 bg-brown-500 text-brown-800 py-2 rounded-xl hover:bg-brown-700 transition-colors px-3"
                        >
                            權限變更
                        </button>
                    </div>
                </div>
            </div>
            <div class="text-brown-600 mt-5">
                <div class="font-black text-2xl mb-5">個人資訊</div>
                <div class="grid grid-cols-4 font-medium gap-x-2 gap-y-7">
                    <div class="col-span-1">姓名: 姜小文</div>
                    <div class="col-span-1">生理性別: 男</div>
                    <div class="col-span-1">生日: 1981/03/02</div>
                    <div class="col-span-1">職業別: 教育業</div>
                    <div class="col-span-1">學歷: 碩士</div>
                    <div class="col-span-1">畢業學校: 廣島大學</div>
                    <div class="col-span-1">畢業科系: 教育心理學</div>
                </div>
            </div>
            <div class="text-brown-600 mt-5">
                <div class="font-black text-2xl mb-5">聯絡資訊</div>
                <div class="grid grid-cols-2 font-medium gap-x-2 gap-y-7">
                    <div class="col-span-1">
                        地址: 桃園市 中壢區 320 中山路185號6樓
                    </div>
                    <div class="col-span-1">E-mail: mkreversal@gmail.com</div>
                    <div class="col-span-1">手機號碼: 0912-345-678</div>
                </div>
            </div>
            <div class="text-brown-600 mt-5">
                <div class="font-black text-2xl mb-5">學習資訊</div>
                <div class="grid grid-cols-2 font-medium gap-x-2 gap-y-7">
                    <div class="col-span-1">
                        欲學習語言別: 日文
                    </div>
                    <div class="col-span-1">學習語言目的: 興趣、工作需求</div>
                    <div class="col-span-1">欲達成目標: N1</div>
                    <div class="col-span-1">目前的程度: N4</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    userInfo: {
        type: Object,
        default: () => ({
            name: '姜小文',
            studentId: '2017010001',
            avatar: '',
        }),
    },
    stats: {
        type: Object,
        default: () => ({
            coursesInProgress: 62,
            dailyStudyTime: 324,
            totalStudyDays: 30,
        }),
    },
});
</script>
