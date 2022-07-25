<template>
	<view>
		<view class="swiper-box">
			<swiper class="swiper-list" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
				<swiper-item>
					<image class="swiper-item" src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/prod/banner.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<view class="content-title">电子色卡小程序</view>
			<view class="content-info">
				<view class="info-line"></view>
				<view class="info-name">内容详情</view>
			</view>
			<view class="content-image">
				<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/detail01.png" mode="widthFix"></image>
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
				duration: 500
			};
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
	
	.content {
		padding: 10rpx 0 20rpx;
		
		.content-title {
			padding: 20rpx;
			font-size: 34rpx;
		}
		
		.content-info {
			padding: 0 20rpx 10rpx;
			display: flex;
			align-items: center;
			
			.info-line {
				width: 8rpx;
				height: 35rpx;
				background: #3B69DC;
				border-radius: 15rpx;
			}
			
			.info-name {
				margin-left: 10rpx;
				font-size: 32rpx;
			}
		}
		
		.content-image {
			width: 100%;
			padding: 20rpx 0;
			
			image {
				width: 100%;
				height: auto;
			}
		}
	}
</style>
