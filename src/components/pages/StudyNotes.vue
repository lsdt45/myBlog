 <template>
    <el-card>
        <template #header>学习笔记</template>
        <el-tabs>
            <el-tab-pane label="HTML_CSS_JS">HTML_CSS_JS</el-tab-pane>
            <el-tab-pane label="Vue">Vue</el-tab-pane>
            <el-tab-pane label="jQuery">jQuery</el-tab-pane>
            <el-tab-pane label="Django">Django</el-tab-pane>
        </el-tabs>
    </el-card>
</template>


<script>
    export default {
        name: 'StudyNotes',
        data() {
            return {
                key: 'value'
            }
        },
    }
</script>


<style scoped>
</style>