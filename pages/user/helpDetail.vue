<template>
	<view>
		<view class="title">旋转放大缩小模型</view>
		<view class="content">
			<view class="content-step">第一步：点击小程序下方【配色】选择房屋模型</view>
			<view class="content-step">第二步：滑动屏幕即可旋转模型</view>
			<view class="content-step">第三步：拉大和缩小屏幕控制模型大小</view>
			<view class="content-image">
				<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/detail01.png" mode="widthFix"></image>
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
		background: #FFFFFF;
	}
	
	.title {
		padding: 0 20rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 34rpx;
		border-bottom: 1px solid #F1F1F1;
	}
	
	.content {
		padding: 20rpx;
		
		.content-step {
			width: 100%;
			padding: 15rpx 0;
			font-size: 30rpx;
		}
		
		.content-image {
			padding: 30rpx 0;
			width: 100%;
			text-align: center;
			
			image {
				width: 710rpx;
				height: auto;
			}
		}
	}
</style>
