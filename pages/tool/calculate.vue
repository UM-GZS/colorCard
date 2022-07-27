<template>
	<view>
		<view class="swiper-box">
			<swiper class="swiper-list" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
				<swiper-item>
					<image class="swiper-item" src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/prod/banner.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="nav-list">
			<scroll-view class="nav-scroll" scroll-x>
				<view class="nav-item" :class="{'active': navIndex === index}" v-for="(item, index) in navList" :key="index" @click="selectNav(index)">
					<view class="nav-name">{{item.name}}</view>
					<view class="nav-line"></view>
				</view>
			</scroll-view>
		</view>
		
		<view class="content">
			<view class="content-input">
				<view class="input-left">真石漆面积</view>
				<view class="input-right">
					<input placeholder="请输入面积" />
					<text>m²</text>
				</view>
			</view>
			<view class="content-button">开始计算</view>
			<view class="content-result">
				<view class="result-title">计算结果</view>
				<view class="result-item">
					<text class="result-name">真石漆</text>
					<text class="result-num">0</text>
					<text class="result-unit">kg</text>
				</view>
				<view class="result-item">
					<text class="result-name">罩光面漆</text>
					<text class="result-num">0</text>
					<text class="result-unit">kg</text>
				</view>
				<view class="result-item">
					<text class="result-name">透明封闭底漆</text>
					<text class="result-num">0</text>
					<text class="result-unit">kg</text>
				</view>
			</view>
			<view class="content-info">
				<view class="info-title">备注</view>
				<view class="info-item">1、产品用量为大致预算，实际用量和施工方法、户型结构、底材处理、产品种类等多种因素有关，可能会有偏差；</view>
				<view class="info-item">2、预算仅用于单色施工，若有分色，请测算每种颜色实际施工面积后购买：</view>
				<view class="info-item">3、产品用量按底漆刷一遍，面漆涂刷二遍估算。</view>
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
				navList: [{
					name: '真石漆'
				}, {
					name: '水包水'
				}, {
					name: '水包砂'
				}, {
					name: '岩片漆'
				}, {
					name: '质感刮砂漆'
				}, {
					name: '内墙乳胶漆'
				}, {
					name: '外墙乳胶漆'
				}],
				navIndex: 0
			};
		},
		methods: {
			selectNav(index) {
				this.navIndex = index;
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

	.nav-list {
		position: sticky;
		top: 0;
		left: 0;
		height: 100rpx;
		background: #FFFFFF;
		z-index: 99;

		.nav-scroll {
			width: 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			white-space: nowrap;

			.nav-item {
				margin: 0 40rpx;
				display: inline-block;

				.nav-name {
					font-size: 32rpx;
					color: #646566;
				}

				.nav-line {
					margin-top: 20rpx;
					width: 100%;
					height: 7rpx;
					border-radius: 15rpx;
				}

				&.active {
					.nav-name {
						color: #3B69DC;
					}

					.nav-line {
						background: #3B69DC;
					}
				}
			}
		}
	}
	
	.content {
		margin: 20rpx 0 0;
		padding: 20rpx 20rpx 30rpx;
		background: #FFFFFF;
		
		.content-input {
			padding: 0 20rpx;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #F7F7F7;
			
			.input-left {
				font-size: 32rpx;
				color: #888888;
			}
			
			.input-right {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				
				input {
					text-align: center;
					width: 180rpx;
				}
				
				text {
					color: #888888;
					display: inline-block;
					margin-left: 10rpx;
				}
			}
		}
		
		.content-button {
			margin: 50rpx auto;
			width: 350rpx;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			background: #3B69DC;
			color: #ffffff;
			border-radius: 10rpx;
		}
		
		.content-result {
			margin: 0 20rpx;
			height: 350rpx;
			background: #EBF0FC;
			border-radius: 10rpx;
			
			.result-title {
				padding: 0 30rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 32rpx;
				color: #3B69DC;
				border-bottom: 1px solid #DCDCDC;
			}
			
			.result-item {
				padding: 30rpx 30rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				text {
					flex: 1;
					text-align: center;
				}
				
				.result-name, .result-unit {
					font-size: 30rpx;
					color: #888888;
				}
				
				.result-num {
					font-size: 30rpx;
					color: #3B69DC;
				}
			}
		}
		
		.content-info {
			margin: 20rpx 20rpx 0;
			height: 460rpx;
			background: #EBF0FC;
			border-radius: 10rpx;
			
			.info-title {
				padding: 0 30rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 32rpx;
				color: #888888;
				border-bottom: 1px solid #DCDCDC;
			}
			
			.info-item {
				padding: 30rpx 20rpx 0;
				font-size: 30rpx;
				color: #888888;
			}
		}
	}
</style>
