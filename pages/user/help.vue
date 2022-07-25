<template>
	<view>
		<view class="head-box">
			<view class="head-card">
				<view class="card-title">常见问题</view>
				<view class="card-item">
					<view class="card-left">
						<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/operate.png"></image>
						<view class="card-key">操作相关</view>
					</view>
					<view class="card-right">
						<view class="card-option" @click="toDetail">旋转放大缩小模型</view>
						<view class="card-option" @click="toDetail">房子怎么换色</view>
						<view class="card-option" @click="toDetail">怎样给房子添加分格线</view>
					</view>
				</view>
				<view class="card-item">
					<view class="card-left">
						<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/share.png"></image>
						<view class="card-key">分享相关</view>
					</view>
					<view class="card-right">
						<view class="card-option" @click="toDetail">怎么给朋友发电子色卡</view>
						<view class="card-option" @click="toDetail">怎么分享配色方案给朋友</view>
					</view>
				</view>
				<view class="card-item">
					<view class="card-left">
						<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/account.png"></image>
						<view class="card-key">账号相关</view>
					</view>
					<view class="card-right">
						<view class="card-option" @click="toDetail">经销商怎样绑定厂家电子色卡</view>
						<view class="card-option" @click="toDetail">授权码从哪里看</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: './helpDetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FAFAFA;
	}

	.head-box {
		position: relative;
		width: 100%;
		height: 300rpx;
		z-index: -1;
		
		.head-card {
			position: relative;
			top: 80rpx;
			margin: 0 40rpx;
			padding: 0 40rpx;
			height: 820rpx;
			background: #FFFFFF;
			border-radius: 15rpx;
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
			z-index: 1;
			
			.card-title {
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 34rpx;
			}
			
			.card-item {
				width: 100%;
				padding: 40rpx 0;
				display: flex;
				align-items: center;
				border-top: 1px solid #F1F1F1;
			}
			
			.card-left {
				text-align: center;
				
				image {
					width: 50rpx;
					height: 50rpx;
				}
				
				.card-key {
					margin-top: 20rpx;
					font-size: 34rpx;
				}
			}
			
			.card-right {
				margin-left: 40rpx;
				
				.card-option {
					padding: 15rpx 0;
					font-size: 30rpx;
				}
			}
		}
	}

	.head-box::after {
		content: '';
		display: block;
		width: 160%;
		height: 200%;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: -100%;
		transform: translateX(-50%);
		background: #3B69DC;
	}
</style>
