 <template>
    <el-card>
        CONTENTS
        <ul @scroll="outputScroll()">
            <el-scrollbar max-height="500px">
                <li v-for="item in dirList" :key="item.level">
                    <a 
                        @click="scrollElement(item.id)"
                        :class="classObj(item)"
                    >
                        {{item.content}}
                    </a>
                </li>
            </el-scrollbar>
        </ul>
    </el-card>
</template>


<script>
    import debounce from "lodash.debounce";
    export default {
        name: 'VueSideDir',
        data() {
            return {
                key: 'value',
                observer: '',
                levelList: ['h1', 'h2', 'h3', 'h4'],
                predirNode: [],
                dirList: [],
                childNodesList: [],
                debounceTest: null,
                active: '',
            }
        },
        props: {
            container: {
                type: String,
                default: ''
            }
        },
        methods: {
            getDir() {
                /**
                *   获取所有子节点,并根据levelList筛选出层级目录
                */
                const childrenList = Array.from(document.querySelectorAll(`#content`))
                for(let i = 0; i < childrenList[0].childNodes.length; i++) {
                    let childNodes = childrenList[0].childNodes[i]
                    if(this.levelList.includes(childNodes.localName)) {
                        this.childNodesList.push(childNodes)
                    }
                }
                /**
                *   根据层级目录,获取内容和响应的level
                */
                this.childNodesList.forEach((item)=> {
                    let dirNode = {
                        content: '',
                        level: 1,
                        offsetTop: 0,
                        id: '',
                    }
                    dirNode.content = item.textContent
                    dirNode.level = this.levelList.indexOf(item.localName) + 1
                    dirNode.offsetTop = item.offsetTop
                    dirNode.id = item.id
                    this.dirList.push(dirNode)
                })
                this.initActive()
            },
            /**
            *   根据tag区分level,并设置当前选择的元素id
            *   @param {string} item - 待处理的node节点
            */
            classObj(item) {
                return {
                    'level2': item.level == 2,
                    'level3': item.level == 3,
                    'level4': item.level == 4,
                    'current': this.active == item.id
                }
            },
           /**
           *    跳转到目标元素
           *    @param {string} id - 待处理的node节点的id
           */
            scrollElement(id) {
                document.querySelector('#' + id).scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                })
                // 当前激活的元素
                this.active = id
            },
            currentDir() {
                if(document.documentElement.scrollTop === 0) {
                    this.initActive()
                }
                this.dirList.forEach((item)=> {
                    if(document.documentElement.scrollTop >= item.offsetTop) {
                        this.$nextTick(() => {
                            this.active = item.id
                        })
                    }
                })
            },
            initActive() {
                if(this.dirList.length === 0)
                    return
                this.active = this.dirList[0].id
            }
        },
        async mounted() {
            // 利用防抖函数避免频繁的滚动操作引起的巨大资源开销
            this.debounceTest = debounce(this.currentDir, 250)
            // 监视DOM,全部DOM加载完毕后再调用回调函数
            this.observer = new MutationObserver(this.getDir);
            this.observer.observe(document.querySelector(`#content`), {
                childList: true,
                subtree: true,
                attributes: true
            });
            // 监视窗口滚动
            window.addEventListener('scroll', this.debounceTest)
        },
        unmounted() {
            // 解除监视
            window.removeEventListener('scroll', this.debounceTest)
        },
    }
</script>


<style lang="scss" scoped>
    $paddingValue: 20px;
    ul {
        padding-left: 0;
        
    }
    .level2 {
        padding-left: $paddingValue;
    }
    .level3 {
        padding-left: 2 * $paddingValue;
    }
    .level4 {
        padding-left: 3 * $paddingValue;
    }
    a {
        cursor: pointer;
        &::before {
            content: '';
            display: inline-block;
            position: relative;
            top: 3px;
            width: 4px;
            height: 16px;
            background: white;
            transition: background 0.5s linear;
        }
        &.current::before {
            background: rgb(71, 71, 238);
        }
        &.current {
            color: rgb(71, 71, 238);
        }
    }
    
</style>