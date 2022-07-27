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
			<view class="nav-item" :class="{'active': navIndex === index}" v-for="(item, index) in navList" :key="index" @click="selectNav(index)">
				<view class="nav-name">{{item.name}}</view>
				<view class="nav-line"></view>
			</view>
		</view>
		<template v-if="navIndex === 0">
			<view class="card-box">
				<view class="card-head">色卡</view>
				<view class="card-content">武汉色卡科技有限公司是一家专门为仿石漆涂料厂家提供软件服务的科技型企业，秉承为涂料行业带来真正有价值的产品。为广大仿石漆生产厂家提供专业的仿石漆电子色卡软件“涂友小二电子色卡”.软件集合电子色卡展示、外墙涂料3维模型效果图展示、公司介绍和产品展示等功能。通过3维模型实时展示涂料上墙效果图，让消费者更直观选择涂料、搭配颜色。</view>
			</view>
		</template>
		<template v-else-if="navIndex === 1">
			<view class="prod-list">
				<view class="prod-item" v-for="(item, index) in prodList" :key="index" @click="toDetail(item)">
					<image :src="item.image"></image>
					<view class="prod-name">{{item.name}}</view>
				</view>
			</view>
			<view class="page-more">没有更多内容了</view>
		</template>
		<template v-else>
			<view class="about-box">
				<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/prod/about.png"></image>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '公司介绍'
				}, {
					name: '产品中心'
				}, {
					name: '联系我们'
				}],
				navIndex: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				prodList: []
			};
		},
		onLoad() {
			this.getProduct();
		},
		methods: {
			selectNav(index) {
				this.navIndex = index;
			},
			getProduct() {
				this.$http
					.getProduct()
				 .then((res) => {
				 	if (res.code == 1) {
							this.prodList = res.data;
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
			},
			toDetail(item) {
				uni.navigateTo({
					url: './detail?id=' + item.id
				})
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
		padding: 0 20rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #FFFFFF;
		z-index: 99;

		.nav-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.nav-name {
				font-size: 32rpx;
				color: #646566;
			}

			.nav-line {
				margin-top: 20rpx;
				width: 70%;
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
	
	.card-box {
		margin: 40rpx 20rpx 20rpx;
		padding: 0 50rpx 40rpx;
		background: #FFFFFF;
		border-radius: 15rpx;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
		
		.card-head {
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 600;
			color: #3B69DC;
		}
		
		.card-content {
			width: 100%;
			line-height: 45rpx;
			font-size: 30rpx;
			color: #3B69DC;
		}
	}
	
	.prod-list {
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		
		.prod-item {
			margin: 20rpx 0;
			width: 340rpx;
			height: 440rpx;
			background: #F2F2F2;
			
			image {
				width: 100%;
				height: 340rpx;
			}
			
			.prod-name {
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 32rpx;
				color: #999999;
			}
		}
	}
	
	.about-box {
		margin: 40rpx 0 0;
		width: 100%;
		height: 400rpx;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.page-more {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
		color: #888888;
	}
</style>
