<template>
	<view>
		<view class="title">仿石漆电子卡体验版</view>
		<view class="card">
			<view class="card-ewm">
				<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/ewm.jpeg"></image>
			</view>
			<view class="card-line"></view>
			<view class="card-button">
				<view class="button-item">发送色卡</view>
				<view class="button-item">下载小程序码</view>
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
		background: linear-gradient(to bottom, #3B69DC, #7799E9);
	}
	
	.title {
		width: 100%;
		padding: 110rpx 0 40rpx;
		text-align: center;
		font-size: 38rpx;
		color: #ffffff;
	}
	
	.card {
		margin: 20rpx auto;
		width: 90%;
		height: 870rpx;
		background: #ffffff;
		-webkit-mask: radial-gradient(circle at 0 60%, #0000 10px, red 0), radial-gradient(circle at right 60%, #0000 10px, red 0);
		-webkit-mask-size: 51%;
		-webkit-mask-position: 0, 100%;
		-webkit-mask-repeat: no-repeat;
		border-radius: 15rpx;
		
		.card-ewm {
			position: relative;
			width: 100%;
			height: 500rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			image {
				width: 380rpx;
				height: 380rpx;
			}
		}
		
		.card-line {
			position: relative;
			top: 20rpx;
			left: 0;
			width: 100%;
			height: 2rpx;
			background: linear-gradient(
			    to left,
			    transparent 0%,
			    transparent 50%,
			    #F2F2F2 50%,
			    #F2F2F2 100%
			);
			background-size: 10px 1px;
			background-repeat: repeat-x;
		}
		
		.card-button {
			position: relative;
			top: 60rpx;
			left: 0;
			width: 100%;
			
			.button-item {
				margin: 40rpx auto;
				width: 350rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 32rpx;
				color: #ffffff;
				background: #3B69DC;
				border-radius: 10rpx;
			}
		}
	}
</style>
