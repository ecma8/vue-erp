<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图片上传">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="产品编号">
        <el-input v-model="form.name" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="产品分类">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-radio-group v-model="form.radio">
          <el-radio label="1">通过</el-radio>
          <el-radio label="2">待审核</el-radio>
          <el-radio label="3">失效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上下架">
        <el-radio-group v-model="form.radio1">
          <el-radio label="1">上架</el-radio>
          <el-radio label="2">下架</el-radio>
          <el-radio label="3">过滤</el-radio>
          <el-radio label="4">侵权</el-radio>
          <el-radio label="5">屏蔽</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-radio-group v-model="form.radio2">
          <el-radio label="1">重点</el-radio>
          <el-radio label="2">原创</el-radio>
          <el-radio label="3">海外</el-radio>
          <el-radio label="4">抓取</el-radio>
          <el-radio label="5">其它</el-radio>
          <el-radio label="6">产品库</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商家信息">
        <el-button type="primary">产品页</el-button>
      </el-form-item>
      <el-form-item label="产品信息">
        <el-input placeholder="厂商名称" v-model="form.detail.input1">
          <template slot="prepend">厂商名称</template>
        </el-input>
        <el-input placeholder="品牌名称" v-model="form.detail.input2">
          <template slot="prepend">品牌名称</template>
        </el-input>
        <el-input placeholder="厂商编号" v-model="form.detail.input3">
          <template slot="prepend">厂商编号</template>
        </el-input>
        <el-input placeholder="内部SKU" v-model="form.detail.input4">
          <template slot="prepend">内部SKU</template>
        </el-input>
        <el-input placeholder="-" v-model="form.detail.input5">
          <template slot="prepend">SKU修正</template>
          <template slot="append">可不填(建议两位英文字母)</template>
        </el-input>
        <el-input placeholder="产品来源" v-model="form.detail.input6">
          <template slot="prepend">产品来源</template>
        </el-input>
        <el-input placeholder="来源网址" v-model="form.detail.input7">
          <template slot="prepend">来源网址</template>
        </el-input>
      </el-form-item>
      <el-form-item label="产品码">
        <el-input placeholder="请输入内容" v-model="form.input10" class="input-with-select">
          <el-select v-model="form.select1" slot="prepend" placeholder="请选择">
            <el-option label="EAN" value="1">EAN</el-option>
            <el-option label="UPC" value="2">EAN</el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="产品信息">
        <el-input placeholder="采购价格" v-model="form.price.input1">
          <template slot="prepend">采购价格</template>
          <template slot="append">人民币(¥)</template>
        </el-input>
        <el-input placeholder="品牌名称" v-model="form.price.input2">
          <template slot="prepend">产品重量</template>
          <template slot="append">千克(kg)</template>
        </el-input>
        <el-input placeholder="厂商编号" v-model="form.price.input3">
          <template slot="prepend">尺寸:长</template>
          <template slot="append">厘米(cm)</template>
        </el-input>
        <el-input placeholder="内部SKU" v-model="form.price.input4">
          <template slot="prepend">宽</template>
          <template slot="append">厘米(cm)</template>
        </el-input>
        <el-input placeholder="-" v-model="form.price.input5">
          <template slot="prepend">国内运费:</template>
          <template slot="append">¥</template>
        </el-input>
        <el-input placeholder="产品来源" v-model="form.price.input6">
          <template slot="prepend">折扣:</template>
          <template slot="append">系数</template>
        </el-input>
      </el-form-item>
      <el-form-item label="产品信息">
        <table class="el-table__header" cellspacing="0">
          <thead class="has-gutter">
          <tr>
            <th>#</th>
            <th class="is-leaf" v-for="(item,index) in tableData.city">{{item}}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>运费(¥) 小包</td>
            <td v-for="(item,index) in tableData.freight">{{item}}</td>
          </tr>
          <tr>
            <td>售价(¥)</td>
            <td v-for="(item,index) in tableData.price">{{item}}</td>
          </tr>
          <tr>
            <td>外币(?)</td>
            <td v-for="(item,index) in tableData.currency">{{item}}{{tableData.x[index]}}</td>
          </tr>
          <tr>
            <td>优化</td>
            <td v-for="(item,index) in tableData.currency1">{{item}}{{tableData.x[index]}}</td>
          </tr>
          <tr>
            <td>最终</td>
            <td v-for="(item,index) in tableData.Final">
              <el-input placeholder="" v-model="tableData.Final[index]">
              </el-input>
            </td>
          </tr>
          <tr>
            <td>利润</td>
            <td v-for="(item,index) in tableData.profit">{{item}}</td>
          </tr>
          </tbody>
        </table>
      </el-form-item>
      <el-form-item label="产品简称">
        <el-input placeholder="英文简称" v-model="form.price.input1">
          <template slot="prepend">英文简称</template>
        </el-input>
      </el-form-item>
      <el-form-item label="产品介绍">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="英语" name="1"></el-tab-pane>
          <el-tab-pane label="法语" name="2"></el-tab-pane>
          <el-tab-pane label="德语" name="3"></el-tab-pane>
          <el-tab-pane label="意大利语" name="4"></el-tab-pane>
          <el-tab-pane label="西班牙语" name="5"></el-tab-pane>
          <el-tab-pane label="意大利语" name="6"></el-tab-pane>
          <el-tab-pane label="日语" name="7"></el-tab-pane>
        </el-tabs>
        <template>
          <p>这是一个标题：{{activeLabel}}</p>
        </template>
        <el-input type="textarea" placeholder="" v-model="form.price.input1">
        </el-input>
        <template>
          <p>关键字 不超过5行：({{activeLabel}})</p>
        </template>
        <el-input type="textarea" placeholder="" v-model="form.price.input1">
        </el-input>
        <template>
          <p>要点说明 不超过5行：({{activeLabel}})</p>
        </template>
        <el-input type="textarea" placeholder="" v-model="form.price.input1">
        </el-input>
        <template>
          <p>产品描述：({{activeLabel}})</p>
        </template>
        <el-input type="textarea" placeholder="" v-model="form.price.input1">
        </el-input>
      </el-form-item>
      <el-form-item label="原始规格">
        <el-radio-group v-model="form.radio3" size="medium">
          <el-radio-button label="1">XS</el-radio-button>
          <el-radio-button label="2">S</el-radio-button>
          <el-radio-button label="3">M</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="form.radio4" size="medium">
          <el-radio-button label="1">米白波点-预定20个工作日发货</el-radio-button>
          <el-radio-button label="2">藏青波点-预定18个工作日发货</el-radio-button>
          <el-radio-button label="3">黑白波点-预定18个工作日发货</el-radio-button>
          <el-radio-button label="4">红白波点-预定20个工作日发货</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-table
          ref="singleTable"
          :data="tableData1"
          highlight-current-row
          style="width: 100%">
          序号
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            property="variant"
            label="变体组合"
            width="120">
          </el-table-column>
          <el-table-column
            property="sku"
            label="SKU修正"
            width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sku"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            property="stock"
            label="库存">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            property="upc"
            label="UPC/EAN">
            <template slot-scope="scope">
              <el-input v-model="scope.row.upc"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column
            property="selectPicture"
            label="选择图片">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogFormVisible = true">选择图片</el-button>
            </template>
          </el-table-column>
          <el-table-column
            property="selectedPictures"
            label="已选图片">
            <template slot-scope="scope">
              <ul class="img-list">
                <li v-for="(item,index) in scope.row.imgList">
                  <img :src="item.imgSrc" alt="">
                </li>
              </ul>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-dialog title="选择图片" :visible.sync="dialogFormVisible">
      <ul class="select-img">
        <li v-for="(item,index) in goodsImgList" @click="changeSelectImg(item,index)">
          <div class="img-mask" v-if="item.status"></div>
          <img :src="item.imgSrc" alt="">
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectImg(dialogFormVisible = false)">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="变体设置" :visible.sync="dialogVariantVisible">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVariantVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectImg(dialogVariantVisible = false)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        activeLabel: '中文',
        dialogFormVisible: false,
        dialogVariantVisible: true,
        variantId: '0',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        tableData: {
          x: ['[USD]', '[CAD]', '[MXN]', '[GBP]', '[EUR]', '[EUR]', '[EUR]', '[EUR]', '[JPY]'],
          city: ['美国', '加拿大', '墨西哥', '英国', '法国', '德国', '意大利', '西班牙', '日本'],
          freight: ['48 小包', '40\t小包', '132\t小包', '46\t小包', '70.6\t小包', '56\t小包', '69\t小包', '52\t小包', '0'],
          price: ['643.15', '625.59', '827.54', '638.76', '692.76', '660.71', '689.25', '651.93', '537.79'],
          currency: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          currency1: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          Final: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          profit: ['349.45(54.4%)', '344.93(54.76%)', '448.63(54.34%)', '346.86(54.38%)', '378.16(54.52%)', '362.59(54.65%)', '379.76(54.75%)', '359.05(54.74%)', '289.61(54.18%)']
        },
        goodsImgList: [
          {
            imgSrc: 'http://pic.58pic.com/58pic/15/69/99/55958PICpUx_1024.jpg',
            id: '1',
            status: false,
          },
          {
            imgSrc: 'http://img.zcool.cn/community/018299554245910000019ae998f74d.jpg',
            id: '2',
            status: false,

          },
          {
            imgSrc: 'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
            id: '3',
            status: false,
          },
        ],
        tableData1: [
          {
            variant: '',
            sku: '',
            stock: '',
            upc: '',
            selectPicture: '',
            selectedPictures: '',
            imgList: [
              {
                imgSrc: ''
              }
            ]
          }
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          radio: '1',
          radio1: '1',
          radio2: '1',
          radio3: '1',
          radio4: '1',
          input10: '',
          select1: '',
          detail: {
            input1: '1',
            input2: '1',
            input3: '1',
            input4: '1',
            input5: '1',
            input6: '1',
            input7: '1',
            input8: '1',
          },
          price: {
            input1: '1',
            input2: '1',
            input3: '1',
            input4: '1',
            input5: '1',
            input6: '1',
            input7: '1',
            input8: '1',
          }
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleClick(tab, event) {
        this.activeLabel = tab.label;
      },
      changeSelectImg(item, index) {
        this.goodsImgList[index].status = !this.goodsImgList[index].status;
      },
      saveSelectImg() {
        this.tableData1[0].imgList = [];
        this.goodsImgList.map((item) => {
          if (item.status) {
            this.tableData1[0].imgList.push({imgSrc: item.imgSrc});
            console.log(this.tableData1[0]);
            item.status = false;
          }
          else {

          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .select-img {
    overflow: hidden;
    li {
      float: left;
      height: 200px;
      position: relative;
      margin: 3px;
      .img-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 100;
        background: rgba(0, 0, 0, 0.3);
      }
      img {
        height: 100%;
      }
    }
  }

  .img-list {
    overflow: hidden;
    li {
      float: left;
      height: 50px;
      position: relative;
      margin: 3px;
      img {
        height: 100%;
      }
    }
  }
</style>
