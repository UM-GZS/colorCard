<template>
	<view>
		<view class="swiper-box">
			<swiper class="swiper-list" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
				<swiper-item>
					<image class="swiper-item" :src="detail.image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<view class="content-title">{{detail.name}}</view>
			<view class="content-info">
				<view class="info-line"></view>
				<view class="info-name">内容详情</view>
			</view>
			<view class="content-detail">
				<view v-html="detail.content"></view>
			</view>
			<!-- <view class="content-image">
				<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/detail01.png" mode="widthFix"></image>
			</view> -->
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
				cid: null,
				detail: {}
			};
		},
		onLoad(options) {
			if (options.id) {
				this.cid = options.id;
				this.getArticle();
			}
		},
		methods: {
			getArticle() {
				this.$http
					.getArticle({ cid: this.cid })
				 .then((res) => {
				 	if (res.code == 1) {
							this.detail = res.data[0];
						} else {
							uni.showToast({
								title: "网络错误，请重试~",
								icon: "none",
								duration: 2000,
							});
						}
					})
					.catch((error) => {
						console.log(error);
					});
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
		
		.content-detail {
			padding: 20rpx;
			
			view {
				width: 100%;
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
