<template>
	<view>
		<view class="head-box">
			<view class="head-card">
				<view class="card-title">登陆电子色卡</view>
				<view class="card-info">欢迎登陆!</view>
				<view class="card-input">
					<input placeholder="请输入账号" />
				</view>
				<view class="card-input">
					<input placeholder="请输入密码" />
				</view>
				<view class="card-button">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
		background: #3B69DC;
		
		.head-card {
			position: relative;
			top: 80rpx;
			margin: 0 40rpx;
			padding: 60rpx;
			height: 700rpx;
			background: #FFFFFF;
			border-radius: 15rpx;
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
			
			.card-title {
				font-size: 40rpx;
			}
			
			.card-info {
				margin: 10rpx 0 60rpx;
				font-size: 28rpx;
				color: #888888;
			}
			
			.card-input {
				margin: 40rpx 0 0;
				padding: 25rpx 10rpx;
				font-size: 34rpx;
				border-bottom: 1px solid #E6E6E6;
			}
			
			.card-button {
				margin: 120rpx auto 0;
				width: 350rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 36rpx;
				color: #ffffff;
				background: #3B69DC;
				border-radius: 10rpx;
			}
		}
	}
</style>
