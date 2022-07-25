<template>
	<view>
		<view class="nav-list">
			<view class="nav-item" :class="{'active': navIndex === index}" v-for="(item, index) in navList" :key="index" @click="selectNav(index)">
				<view class="nav-name">{{item.name}}</view>
				<view class="nav-line"></view>
			</view>
		</view>
		<template v-if="navIndex === 0">
			<view class="color-card" v-for="(item, index) in itemList" :key="index">
				<view class="card-head">{{item.name}}</view>
				<view class="card-list">
					<view class="card-item" v-for="(ite, indx) in item.child" :key="indx">
						<image :src="ite.url" mode="center"></image>
						<view class="card-tag">{{ite.name}}</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="color-list">
				<view class="color-item" v-for="(item, index) in itemList[navIndex - 1].child" :key="index">
					<image :src="item.url" mode="center"></image>
					<view class="color-name">{{item.name}}</view>
				</view>
			</view>
		</template>
		<view class="page-more">没有更多内容了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '全部'
				}, {
					name: '真石漆'
				}, {
					name: '水包水'
				}, {
					name: '水包砂'
				}],
				navIndex: 0,
				itemList: [{
					name: '真石漆',
					child: [{
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2001.jpg',
						name: 'TY-2001'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2002.jpg',
						name: 'TY-2002'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2003.jpg',
						name: 'TY-2003'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2004.jpg',
						name: 'TY-2004'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2005.jpg',
						name: 'TY-2005'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-2006.jpg',
						name: 'TY-2006'
					}]
				}, {
					name: '水包水',
					child: [{
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6001.jpg',
						name: 'TY-6001'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6002.jpg',
						name: 'TY-6002'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6003.jpg',
						name: 'TY-6003'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6004.jpg',
						name: 'TY-6004'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6005.jpg',
						name: 'TY-6005'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-6006.jpg',
						name: 'TY-6006'
					}]
				}, {
					name: '水包砂',
					child: [{
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8001.jpg',
						name: 'TY-8001'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8002.jpg',
						name: 'TY-8002'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8003.jpg',
						name: 'TY-8003'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8004.jpg',
						name: 'TY-8004'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8005.jpg',
						name: 'TY-8005'
					}, {
						url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/home/TY-8006.jpg',
						name: 'TY-8006'
					}]
				}]
			}
		},
		onLoad() {

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

	.color-card {
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 15rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

		.card-head {
			font-size: 32rpx;
			font-weight: 600;
			color: #276D86;
			padding: 10rpx 20rpx;
		}

		.card-list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.card-item {
				margin: 15rpx 10rpx;
				position: relative;
				width: 150rpx;
				height: 150rpx;
				border-radius: 20rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
				}

				.card-tag {
					position: absolute;
					right: 0;
					bottom: 0;
					padding: 5rpx 15rpx;
					font-size: 20rpx;
					border-radius: 10rpx;
					background: #FFFFFF;
					box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
				}
			}
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

	.color-list {
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		.color-item {
			margin: 0 0 20rpx;
			width: 340rpx;
			border-radius: 20rpx;

			image {
				width: 100%;
				height: 200rpx;
				border-radius: 20rpx;
				box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
			}

			.color-name {
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 30rpx;
				color: #888888;
			}
		}
	}
</style>
