module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {  
      options: {  
      },  
      dist: {  
        src: ['src/zepto.min.js','src/hammer.min.js','src/plupload.full.min.js','src/Slide.js','src/canvas.js','src/qiniu.js','src/piczoom.js'],//src文件夹下包括子文件夹下的所有文件  
        dest: 'dest/built.js'//合并文件在dist下名为built.js的文件  
      }  
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dest/built.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }
    }
  });
  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 默认任务
  grunt.registerTask('default', ['concat','uglify']);  
}