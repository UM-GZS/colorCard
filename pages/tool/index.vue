<template>
	<view>
		<view class="swiper-box">
			<swiper class="swiper-list" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
				<swiper-item>
					<image class="swiper-item" src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/prod/banner.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="tool-list">
			<view class="tool-item" v-for="(item, index) in toolList" :key="index" @click="toUrl(item.page, item.isTab)">
				<view class="item-left">
					<view class="item-title">{{item.name}}</view>
					<view class="item-info">{{item.info}}</view>
					<view class="item-go">立即体验</view>
				</view>
				<view class="item-right">
					<image :src="item.url"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				toolList: [{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/tool01.png',
					name: '仿石漆颜色展示',
					info: '颜色种类繁多，供您选择',
					page: '',
					isTab: false
				}, {
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/tool02.png',
					name: '仿石漆3D配色',
					info: '3D在线配色，实时查看预览效果',
					page: '/pages/color/index',
					isTab: true
				}, {
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/tool03.png',
					name: '乳胶漆电子色卡',
					info: '智能换色，预览乳胶漆涂装效果',
					page: '/pages/tool/colorList',
					isTab: false
				}, {
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/tool04.png',
					name: '案例展示',
					info: '真实案例，精美绝伦',
					page: '',
					isTab: false
				}, {
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/tool05.png',
					name: '漆量计算',
					info: '一键计算，轻松搞定涂料用量',
					page: '/pages/tool/calculate',
					isTab: false
				}]
			};
		},
		methods: {
			toUrl(url, isTab) {
				if (!url) return;
				if (isTab) {
					uni.switchTab({
						url: url
					})
				} else {
					uni.navigateTo({
						url: url
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FAFAFA;
	}

	.swiper-box {
		width: 100%;
		height: 350rpx;

		.swiper-list {
			width: 100%;
			height: 100%;

			.swiper-item {
				width: 100%;
				height: 100%;
			}
		}
	}

	.tool-list {
		padding: 10rpx 20rpx 10rpx;

		.tool-item {
			margin: 30rpx 0;
			padding: 0 20rpx;
			height: 280rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			border-radius: 15rpx;
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

			.item-left {
				padding: 0 20rpx 0 0;

				.item-title {
					font-size: 36rpx;
				}

				.item-info {
					padding: 20rpx 0 60rpx;
					font-size: 28rpx;
					color: #888888;
				}

				.item-go {
					font-size: 32rpx;
					color: #3B69DC;
				}
			}

			.item-right {
				width: 200rpx;
				height: 150rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
