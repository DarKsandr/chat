<template>
    <div class="colorPanel"
		:style="{ display: colorPanelShown ? 'flex' : 'none', opacity: colorPanelShown ? 'flex' : 'none' }">
		<div class="colorPanel__colorSlot" v-for="color in colors">
			<div class="colorPanel__color" :style="{ background: color }" @click="setColor(color)"></div>
		</div>
	</div>
</template>
<script setup>

const props = defineProps({
    chatColor: {
        type: String,
        required: true,
    },
    colorPanelShown: {
        type: Boolean,
        required: true,
    }
})

const emit = defineEmits([
    'update:chatColor',
    'update:colorPanelShown',
]);

const colors = ['#0084ff', '#ffc300', '#4af844', '#7646ff', '#a695c7', '#ff5ca1', '#fa3c4c', '#f56b78', '#33343f'];

const setColor = color => {
    emit('update:chatColor', color)
    emit('update:colorPanelShown', false);
};
</script>

<style scoped>
.colorPanel {
	position: absolute;
	margin: 70px auto;
	left: 0;
	right: 0;
	height: 200px;
	width: 200px;
	z-index: 3;
	background: #fff;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	box-shadow: 0 0 30px #aaa;
	transition: all 0.12s;
}

.colorPanel__colorSlot {
	box-sizing: border-box;
	width: 33%;
	height: 33%;
	padding: 10px;
}

.colorPanel__color {
	height: 100%;
	width: 100%;
	border-radius: 100px;
	cursor: pointer;
	background: #eee;
	transition-duration: 0.12s;
}

.colorPanel__color:hover {
	opacity: 0.7;
}
</style>