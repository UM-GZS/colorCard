<template>
	<view>
		<view class="swiper-box">
			<swiper class="swiper-list" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
				<swiper-item>
					<image class="swiper-item" src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/prod/banner.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="search">
			<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/tool/search.png"></image>
			<input placeholder="请输入搜索内容" />
		</view>
		<view class="color-list">
			<view class="color-item" v-for="(item, index) in colorList" :key="index">
				<view class="color-val" :style="{'background': item.color}"></view>
				<view class="color-name">{{item.name}}</view>
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
				colorList: [{
					color: '#F3EBD6',
					name: '0061'
				},{
					color: '#F1E3C0',
					name: '0062'
				},{
					color: '#FEDD8E',
					name: '0063'
				},{
					color: '#FCCB64',
					name: '0064'
				},{
					color: '#FFD87D',
					name: '0065'
				},{
					color: '#F7E0AA',
					name: '0066'
				},{
					color: '#C7B69C',
					name: '0091'
				},{
					color: '#CBAF87',
					name: '0092'
				},{
					color: '#B99364	',
					name: '0093'
				},{
					color: '#896847',
					name: '0094'
				},{
					color: '#9B7A4F',
					name: '0095'
				},{
					color: '#D2AB74',
					name: '0096'
				},{
					color: '#E5D2B1',
					name: '0111'
				},{
					color: '#E8CA98',
					name: '0112'
				},{
					color: '#F5BE6E',
					name: '0113'
				},{
					color: '#D59C4F',
					name: '0114'
				},{
					color: '#F6B65C',
					name: '0115'
				},{
					color: '#EAC181',
					name: '0116'
				},{
					color: '#FFB866',
					name: '0124'
				},{
					color: '#FFC289',
					name: '0133'
				},{
					color: '#FFAB65',
					name: '0134'
				},{
					color: '#E7CDB2',
					name: '0141'
				},{
					color: '#EFC299',
					name: '0142'
				},{
					color: '#F4A96F',
					name: '0143'
				},{
					color: '#D48751',
					name: '0144'
				},{
					color: '#F19E5C',
					name: '0145'
				},{
					color: '#F0B482',
					name: '0146'
				},{
					color: '#D2B89F',
					name: '0151'
				},{
					color: '#D2AA87',
					name: '0152'
				},{
					color: '#B98860',
					name: '0153'
				},{
					color: '#8B6149',
					name: '0154'
				},{
					color: '#A57453',
					name: '0155'
				},{
					color: '#D59C71',
					name: '0156'
				},{
					color: '#F09060',
					name: '0185'
				},{
					color: '#D49375',
					name: '0196'
				},{
					color: '#E8C8B9',
					name: '0221'
				},{
					color: '#ECB7A5',
					name: '0222'
				},{
					color: '#EA927C',
					name: '0223'
				},{
					color: '#C76B56',
					name: '0224'
				},{
					color: '#EA8267',
					name: '0225'
				}]
			};
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
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
	
	.search {
		margin: 20rpx;
		padding: 0 20rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		border: 1px solid #E6E6EA;
		border-radius: 10rpx;
		
		image {
			width: 45rpx;
			height: 45rpx;
		}
		
		input {
			margin-left: 20rpx;
			font-size: 30rpx;
		}
	}
	
	.color-list {
		padding: 0 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		
		.color-item {
			margin: 0 0 15rpx;
			width: 140rpx;
			height: 150rpx;
			background: #EEEEEE;
			
			.color-val {
				width: 100%;
				height: 100rpx;
				background: #FEDD8E;
			}
			
			.color-name {
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 28rpx;
				color: #888888;
			}
		}
	}
</style>
