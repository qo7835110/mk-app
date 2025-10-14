<script setup>
// ref for the scrollable message list element
const messageListEl = ref(null)

// Reactive state for new message input
const newMessage = ref('')

// Mock data for chat messages
const messages = ref([
    {
        id: 1,
        user: { name: 'Yui', avatar: '' },
        text: '這是一個測試訊息',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 2,
        user: { name: 'Yui', avatar: '' },
        text: 'TEST',
        timestamp: '21:32',
        isOwn: false
    },
    {
        id: 3,
        user: { name: 'ZZZ', avatar: '' },
        text: '嗨！你好啊',
        timestamp: '21:33',
        isOwn: false
    },
    {
        id: 4,
        user: { name: 'Me', avatar: '' },
        text: 'TEST',
        timestamp: '21:33',
        isOwn: true
    }
])

// Function to scroll to the bottom of the message list
const scrollToBottom = async () => {
    await nextTick()
    if (messageListEl.value) {
        messageListEl.value.scrollTop = messageListEl.value.scrollHeight
    }
}

// Function to handle sending a new message
const sendMessage = () => {
    if (newMessage.value.trim() === '') return

    messages.value.push({
        id: Date.now(),
        user: { name: 'Me' },
        text: newMessage.value,
        timestamp: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }),
        isOwn: true
    })

    newMessage.value = ''
    scrollToBottom()
}

// Scroll to bottom when the component is first mounted
onMounted(() => {
    scrollToBottom()
})
</script>

<template>
    <div
        class="flex h-[60vh] w-full max-w-sm flex-col rounded-3xl bg-stone-100/60 shadow-lg backdrop-blur-lg"
    >
        <header
            class="flex flex-shrink-0 items-center justify-between rounded-t-3xl border-b border-stone-300/60 bg-[#d1ccc3] px-5 py-4"
        >
            <h1 class="text-lg font-semibold text-stone-700">MK大廳聊天室</h1>
            <button class="flex flex-col gap-1">
                <span class="h-0.5 w-5 rounded-full bg-stone-600"></span>
                <span class="h-0.5 w-5 rounded-full bg-stone-600"></span>
                <span class="h-0.5 w-5 rounded-full bg-stone-600"></span>
            </button>
        </header>

        <div
            ref="messageListEl"
            class="custom-scrollbar flex-grow space-y-5 overflow-y-auto bg-[#E5E2DA] p-5"
        >
            <div
                v-for="(message, i) in messages"
                :key="message.id"
                class="items-top flex gap-3"
                :class="[message.isOwn ? 'flex-row-reverse' : '']"
            >
                <div class="h-6 w-6 flex-shrink-0 rounded-full bg-white/80"></div>
                <div class="w-[75%]">
                    <div v-if="message.isOwn" class="mb-1 flex justify-end text-xs text-stone-500">
                        {{ message.timestamp }}
                    </div>
                    <div v-else class="items-top mb-1 flex gap-2">
                        <div class="text-xs text-stone-600">{{ message.user.name }}</div>
                        <div class="text-xs text-stone-500">{{ message.timestamp }}</div>
                    </div>

                    <div
                        class="w-[100%] rounded-2xl px-4 py-2.5 text-stone-800"
                        :class="[
                            message.isOwn
                                ? 'rounded-tr-none bg-[#F8F7F0]'
                                : 'rounded-tl-none bg-[#F8F7F0]'
                        ]"
                    >
                        <p class="text-sm">{{ message.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <footer class="flex-shrink-0 rounded-b-3xl bg-[#D1CCC3] p-3">
            <div class="flex h-[96px] flex-col gap-2 rounded-2xl bg-[#F8F7F0] px-4 py-2.5">
                <input
                    v-model="newMessage"
                    @keydown.enter.prevent="sendMessage"
                    type="text"
                    placeholder="發言請勿違反善良風俗，不想發文也能在此討論～"
                    class="flex-grow bg-transparent text-sm text-stone-800 placeholder-stone-500 focus:ring-0 focus:outline-none"
                />
                <div class="flex items-center justify-end">
                    <button>
                        <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.5 10.75C1.5 6.27166 1.5 4.03249 2.89124 2.64124C4.28249 1.25 6.52166 1.25 11 1.25C15.4783 1.25 17.7175 1.25 19.1088 2.64124C20.5 4.03249 20.5 6.27166 20.5 10.75C20.5 15.2283 20.5 17.4675 19.1088 18.8588C17.7175 20.25 15.4783 20.25 11 20.25C6.52166 20.25 4.28249 20.25 2.89124 18.8588C1.5 17.4675 1.5 15.2283 1.5 10.75Z"
                                stroke="#362010"
                                stroke-width="1.5"
                            />
                            <circle
                                cx="15.5"
                                cy="6.25"
                                r="1.5"
                                stroke="#362010"
                                stroke-width="1.5"
                            />
                            <path
                                d="M1 12.8854C1.66663 12.7955 2.3406 12.7511 3.01569 12.7527C5.87163 12.6966 8.65761 13.5229 10.8765 15.0842C12.9345 16.5321 14.3805 18.5249 15 20.75"
                                stroke="#362010"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 16.75C13.7015 15.4233 15.5345 14.7428 17.3862 14.7501C18.4362 14.749 19.4812 14.9716 20.5 15.4117"
                                stroke="#362010"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <button @click="sendMessage" class="p-2 text-stone-700">
                        <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.5962 7.09799L2.32133 0.409284C1.97448 0.206395 1.55002 0.18712 1.18621 0.357737C0.822394 0.528354 0.565798 0.867025 0.5 1.26343C0.504547 1.39513 0.536286 1.52447 0.593222 1.64332L3.12071 7.74938C3.24757 8.15484 3.31661 8.57615 3.3258 9.00089C3.31664 9.42563 3.2476 9.84695 3.12071 10.2524L0.593222 16.3585C0.536286 16.4773 0.504547 16.6066 0.5 16.7383C0.566272 17.1342 0.822812 17.4722 1.18623 17.6425C1.54966 17.8128 1.97356 17.7937 2.32017 17.5913L15.5962 10.9026C16.3365 10.5588 16.8101 9.81661 16.8101 9.00031C16.8101 8.18401 16.3365 7.44186 15.5962 7.09799Z"
                                fill="#362010"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
/* We need some custom CSS for the scrollbar as Tailwind doesn't support it directly */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #a8a29e; /* stone-400 */
    border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #78716c; /* stone-500 */
}
</style>
