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
		<template v-if="navIndex === 0">
			<view class="color-card" v-for="(item, index) in itemList" :key="index">
				<view class="card-head">{{item.name}}</view>
				<view class="card-list">
					<view class="card-item" v-for="(ite, indx) in item.child" :key="indx">
						<image :src="ite.image" mode="center" @click="previewImg(ite.image)"></image>
						<view class="card-tag">{{ite.name}}</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="color-list">
				<view class="color-item" v-for="(item, index) in cardList" :key="index">
					<image :src="item.image" mode="center" @click="previewImg(item.image)"></image>
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
					name: '全部',
					id: 0
				}],
				navIndex: 0,
				navId: 0,
				itemList: [],
				cardList: []
			}
		},
		onLoad() {
			this.getColorCardType();
		},
		methods: {
			getColorCardType() {
				this.$http
					.getColorCardType()
					.then((res) => {
						if (res.code == 1) {
							this.navList = this.navList.concat(res.data);
							this.itemList = res.data;
							this.getColorCard();
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
			getColorCard() {
				this.$http
					.getColorCard({ cid: this.navId })
					.then((res) => {
						if (res.code == 1) {
							if (this.navIndex) {
								this.cardList = res.data;
							} else {
								let newArr = res.data;
								if (newArr.length > 0) {
									this.itemList.forEach((item, index) => {
										let arr = newArr.filter(ite => item.id == ite.cid);
										this.$set(this.itemList[index], 'child', arr);
									})
								}
							}
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
			previewImg(img) {
				let newArr = [];
				newArr.push(img);
				uni.previewImage({
					urls: newArr,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('success')
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			selectNav(index) {
				this.navIndex = index;
				this.navId = this.navList[index].id;
				this.getColorCard();
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
				width: 22%;
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
