 <template>
    <el-card class="Me">
        <el-container>
            <el-header>
                <el-row justify="center">
                    <img src="../../assets/avatar.png" alt="avatar" class="headerImg">
                </el-row>
                <el-row justify="center">
                    <strong>莫诺库洛</strong>
                </el-row>
            </el-header>
            <el-main>
                <p>以彼之长，补己之短。</p>
                <p>有匪君子，如切如磋，如琢如磨。</p>
            </el-main>
            <el-footer>
                <router-link to="/">More</router-link>
            </el-footer>
        </el-container>
    </el-card>
</template>


<script>
    export default {
        name: 'Me',
        data() {
            return {
                key: 'value'
            }
        },
    }
</script>


<style lang="scss" scoped>
    
</style>