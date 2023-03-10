<template>
    <el-container class="main-footer__wapprer">
        <el-main>
            <el-row justify="center">
                <h3>站点声明:</h3>
            </el-row>
            <el-row justify="center">
                <article>
                    <p>1、本站创建的目的以学习交流为基础，记录日常生活中遇到的事物。</p>
                    <p>2、本站中所有分享的模板只供个人学习研究使用，未经允许不得用于任何商业目的。</p>
                    <p>3、本站所有文章均可转载，请注明出处，欢迎大家看到喜欢的文章帮忙转发点赞。</p>
                    <p>Copyright © 2022-2023 莫诺库洛 保留所有版权 联系我:lsdt45@outlook.com 
                        <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2023004650号-1</a>
                    </p>

                </article>
            </el-row>
        </el-main>
    </el-container>
</template>


<script>
export default {
    name: 'Footer',
    data() {
        return {
            key: 'value'
        }
    },
}
</script>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.main-footer__wapprer {
    padding: 20px 0;
    height: 190px;
    margin-top: 30px;
    background: #414d55;

    h3 {
        color: #3a76bf;
    }

    p {
        margin-block-end: 0.3em;
    }

    a {
        color: #fff;
    }

    .el-main {
        width: 10%;
        padding-top: 0;
        overflow: hidden;
    }

    article {
        text-align: left;
        color: white;
    }
}</style>