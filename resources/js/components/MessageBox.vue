<template>
    <div class="chatbox__messageBox"
		:class="{ 'chatbox__messageBox--primary': isPrimary }">
		<div class="chatbox__message" :class="{ 'chatbox__message--primary': isPrimary }"
			:style="{ background: isPrimary ? chatColor : 'inital' }">
			<slot></slot>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isPrimary: {
        type: Boolean,
        default: false,
    },
	chatColor: {
		type: String,
		required: true,
	}
});
</script>

<style scoped>
.chatbox__messageBox {
	width: 100%;
	margin-top: 5px;
	position: relative;
}

.chatbox__messageBox--primary {
	text-align: right;
}
.chatbox__message {
	position: relative;
	display: inline-block;
	padding: 5px 20px;
	border-radius: 15px;
	cursor: default;
	background: #f1f1f1;
	transition: all 0.12s;
}

.chatbox__message:hover {
	opacity: 0.7;
}

.chatbox__message:hover .chatbox__tooltip {
	opacity: 1;
}

.chatbox__message--primary {
	color: #fff;
}
</style>