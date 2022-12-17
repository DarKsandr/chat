<template>
	<div class="chatbox">
		<ColorPanel v-model:chatColor="chatColor" v-model:colorPanelShown="colorPanelShown" />
		<div class="chatbox__header">
			<div class="chatbox__headerText">
				{{store.getters.user.name}}
				<div class="chatbox__onlineDot"></div>
			</div>
			<div class="chatbox__button" @click="colorPanelShown = !colorPanelShown"></div>
		</div>
		<div class="chatbox__messages">
			<MessageBox v-for="message in messages" :is-primary="message.primary" :chat-color="chatColor">{{message.text}}</MessageBox>
		</div>
		<div class="chatbox__inputPanel">
			<input class="chatbox__input" v-model="newMessage" @keyup.enter="send" placeholder="Aa" />
			<div class="chatbox__tooltip chatbox__tooltip--bottom"
				:style="{ opacity: (newMessage.length && !tutorialSeen) ? 0.7 : 0 }">Press enter to send
				the message</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from 'vuex';
import MessageBox from "@/js/components/MessageBox.vue";
import ColorPanel from "@/js/components/ColorPanel.vue";

const store = useStore();

const chatColor = ref('#0084ff'),
	colorPanelShown = ref(false),
	tutorialSeen = ref(''),
	newMessage = ref('');

const messages = ref([
	{ id: 0, text: 'Hi there', primary: false, },
	{ id: 1, text: 'Hi rob!', primary: true, },
	{ id: 2, text: 'This is better than messenger xD', primary: false, },
	{ id: 3, text: 'ofc', primary: true, },
	{ id: 4, text: 'everything is better than messenger.. XD', primary: true, },
	{ id: 5, text: 'ok, chill bro ಠ_ಠ thats just ez script made with vue.js', primary: false, },
	{ id: 6, text: 'but look how it is cute <3', primary: true, }
]);

const send = () => {
	if (newMessage.value.length > 0) {
		const {id:lastId} = messages.value.at(-1);
		messages.value.push({ id: lastId + 1, text: newMessage.value, primary: true, });
		newMessage.value = '';
		tutorialSeen.value = true;
	}
};

</script>

<style>
body {
	margin: 0;
	font-family: 'Roboto';
}

.visible {
	opacity: 1;
}

.chatbox {
	display: block;
	position: relative;
	max-width: 400px;
	margin: 70px auto;
	padding: 10px;
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 0 30px #eee;
	font-size: 17px;
}

.chatbox__header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	font-weight: 900;
	padding: 10px 0;
	width: 100%;
	text-align: center;
	cursor: default;
	justify-content: space-between;
	border-bottom: 2px solid #f5f5f5;
}

.chatbox__headerText {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
}

.chatbox__onlineDot {
	display: block;
	background: #00c853;
	height: 10px;
	width: 10px;
	border-radius: 10px;
	margin-left: 5px;
	animation-name: blinking;
	animation-duration: 1.5s;
	animation-iteration-count: infinite;
}

.chatbox__tooltip {
	opacity: 0;
	z-index: 2;
	width: auto;
	font-size: 12px;
	text-align: center;
	padding: 3px 10px;
	cursor: default;
	position: absolute;
	color: #fff;
	box-sizing: border-box;
	border-radius: 15px;
	background: #111;
	transition: all 0.14s;
}

.chatbox__tooltip--bottom {
	top: 115%;
	margin-left: 110px;
	opacity: 0.2;
}

.chatbox__tooltip--left {
	right: calc(100% + 5px);
	right: -moz-calc(100% + 5px);
	margin-left: 5px;
	top: 5px;
}

.chatbox__messages {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
}

.chatbox__inputPanel {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.chatbox__input {
	font-family: 'Roboto';
	font-size: 1em;
	width: 100%;
	border: none;
	background: #f3f3f3;
	margin: 0 10px;
	padding: 5px 15px;
	color: #444;
	border-radius: 15px;
	box-sizing: border-box;
}

.chatbox__button {
	display: inline-block;
	height: 20px;
	width: 22px;
	color: #fff;
	border-radius: 15px;
	background: v-bind(chatColor);
	cursor: pointer;
	font-weight: 900;
	transition-duration: 0.1s;
}

.chatbox__button:hover {
	opacity: 0.7;
}

@-moz-keyframes blinking {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}

@-webkit-keyframes blinking {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}

@-o-keyframes blinking {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}

@keyframes blinking {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}

@media screen and (max-width: 450px) {
	.chatbox {
		box-sizing: border-box;
		margin: 0;
		max-width: 100%;
		width: 100%;
		border-radius: 0;
		height: 100%;
	}
}
</style>