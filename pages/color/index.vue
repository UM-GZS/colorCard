<template>
	<view>
		<view class="nav-list">
			<scroll-view class="nav-scroll" scroll-x>
				<view class="nav-item" :class="{'active': navIndex === index}" v-for="(item, index) in navList" :key="index" @click="selectNav(index)">
					<view class="nav-name">{{item.name}}</view>
					<view class="nav-line"></view>
				</view>
			</scroll-view>
		</view>
		<view class="card-list">
			<view class="card-item" v-for="(item, index) in cardList" :key="index">
				<view class="card-name">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '全部'
				}, {
					name: '别墅'
				}, {
					name: '高楼'
				}, {
					name: '中式'
				}, {
					name: '商业'
				}, {
					name: '其他'
				}],
				cardList: [{
					name: '别墅01'
				}, {
					name: '别墅02'
				}, {
					name: '别墅03'
				}, {
					name: '别墅04'
				}, {
					name: '别墅05'
				}, {
					name: '别墅06'
				}, {
					name: '高楼01'
				}, {
					name: '高楼02'
				}, {
					name: '高楼03'
				}, {
					name: '高楼04'
				}, {
					name: '高楼05'
				}, {
					name: '高楼06'
				}, {
					name: '中式01'
				}, {
					name: '中式02'
				}, {
					name: '中式03'
				}, {
					name: '中式04'
				}, {
					name: '中式05'
				}, {
					name: '中式06'
				}, {
					name: '商业01'
				}, {
					name: '商业02'
				}, {
					name: '商业03'
				}, {
					name: '商业04'
				}, {
					name: '商业05'
				}, {
					name: '商业06'
				}],
				navIndex: 0,
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

	.card-list {
		padding: 10rpx 15rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		.card-item {
			margin: 15rpx 20rpx;
			width: 200rpx;
			height: 200rpx;
			line-height: 200rpx;
			text-align: center;
			background: #E6E7E9;
			border-radius: 15rpx;
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

			.card-name {
				font-size: 32rpx;
				color: #888888;
			}
		}
	}

	/* #ifdef MP-WEIXIN || APP-PLUS */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */

	/* #ifdef H5 */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */
</style>
