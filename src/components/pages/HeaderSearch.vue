 <template>
    <div id="headerSearch">
        <div class="searchButton" @click="setIsHidden()"></div>
        <transition name="el-fade-in-linear">
            <el-input class="searchInput" size="small" 
                placeholder="搜搜看吧" v-show="isHidden" 
                v-model="searchValue" @keyup.enter="searchArticle()"/>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'HeaderSearch',
        data() {
            return {
               isHidden: false,
               searchValue: '',
               articleList: []
            }
        },
        methods: {
            setIsHidden() {
                this.isHidden = !this.isHidden
            },
            /**
            *   从后端获取检索后的文章列表
            */
            searchArticle() {
                this.$router.push('/articleList/search/' + this.searchValue)
                // if(this.searchValue) {
                //     let url = '/articleList/search/' + this.searchValue
                //     this.axios.get(url)
                //     .then(res => {
                //         this.articleList = res.data
                //         console.log('HeaderSearch_searchArticle()=' + res.data)
                //     })
                //     .catch(err => {
                //         console.error(err); 
                //     })    
                // }
            }
        }
    }
</script>


<style>
    #headerSearch {
        display: flex;
        position: relative;
        flex-basis: 200px;
        top: 12px;
        left: 20px;
	}
    .searchButton {
        width: 30px;
		height: 30px;
		background: url('../../assets/search.png');
		background-size: cover;
		cursor: pointer;
    }
    .searchInput {
        margin-left: 10px;
    }
</style>