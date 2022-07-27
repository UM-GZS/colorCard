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
				<image class="card-image" :src="item.image"></image>
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
					name: '全部',
					id: 0
				}],
				navIndex: 0,
				navId: 0,
				cardList: [],
			};
		},
		onLoad() {
			this.getModelingType();
			this.getModeling();
		},
		methods: {
			getModelingType() {
				this.$http
					.getModelingType()
				 .then((res) => {
				 	if (res.code == 1) {
							this.navList = this.navList.concat(res.data);
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
			getModeling() {
				this.$http
					.getModeling({ tid: this.navId })
				 .then((res) => {
				 	if (res.code == 1) {
							this.cardList = res.data;
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
			selectNav(index) {
				this.navIndex = index;
				this.navId = this.navList[index].id;
				this.getModeling();
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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #F2F2F2;
			border-radius: 15rpx;
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
			
			.card-image {
				width: 100%;
				height: 140rpx;
				border-radius: 15rpx;
			}

			.card-name {
				font-size: 30rpx;
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
