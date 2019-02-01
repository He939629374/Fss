
 <template>
    <view class="content">
        <mSearch :show="false" @search="search($event)"></mSearch>
		<view class="HeadContente">
			<view><text>搜索指定内容</text></view>
			<view v-for="(row,i) in listTemp" :key="row.id" class="v_row">
				<view :id="index" v-for="(cell,key,index) in row" :key="cell.id" class="v_row_block">
					<view class="v_col" @click="tabonclick(cell.name,cell.bz)">
						<view>{{cell.name}}</view>						
					</view>
					<view class="v_col" v-if="key!=2"><text>|</text></view>
				</view>
				
			</view>  
		</view>
    </view>
 </template>

 <script>
 import mSearch from  "@/components/mehaotian-search/mehaotian-search.vue";
 export default {
    components: {
        mSearch
    },
    data() {
        return {
            val0: '',
			list:[//目前只用到  name
				{"bz":'../../static/img/conZL.png',"name":'编号',url:"../user/user"},
				{"bz":'../../static/img/conRC.png',"name":'时间',url:"../scheduling/scheduling"},
				{"bz":'../../static/img/conZX.png',"name":'单位',url:"../msgcenter/msgcenter"},
				{"bz":'../../static/img/conSP.png',"name":'项目',url:"../record/record"},
				{"bz":'../../static/img/conTX.png',"name":'类别',url:"../tips/tips"},
				{"bz":'../../static/img/conGZ.png',"name":'地址',url:"../work/work"}
			]
        };
    },
	computed: {
		//计算函数
		listTemp: function () { //数据分组
			var list = this.list;
			var arrTemp = [];
			var index = 0;
			var sectionCount = 3; //一行显示多少个
			for (var i = 0; i < list.length; i++) {
				index = parseInt(i / sectionCount); //取余数
				if (arrTemp.length <= index) { //每隔 sectionCount 个数据添加一行
					arrTemp.push([]);
				}
				arrTemp[index].push(list[i]); //每行添加 sectionCount 个数据
			}
			return arrTemp;
		}
	},
    methods: {
        search(e) {
            console.log(e);
            //this['val'+val] = e;
			this.val0 = e;
        },
		tabonclick(e, val) {
		    console.log(e, val);
		    this.$set(val0,e);
		}
    }
 };
 </script>
 <style>
	 page {
		 display: block;
	 }
	 .content {
		 background-color: #FFFFFF;
	 }
	.v_row_block {
		display:flex;
	}
	.v_row {
		color:black;
		display: flex;
		justify-content:space-between;
		padding: 20upx;
	}
	.v_col {
		width: 120upx;
		text-align:center;
	}
	.HeadContente view  {
		text-align: center;
		color: #1C78C0;
	}
	.HeadContente view  text{
		color: #E1E1E1;
	}
	.HeadContente {
		padding: 65upx;
		padding-top: 25upx;
	}
 </style>