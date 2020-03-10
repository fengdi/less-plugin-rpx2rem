


const parseOptions = function(options){
    let optionsObject = {};
    if(typeof options === 'string'){
        options.trim().split(/\s+/).forEach(param=>{
            let paramPatterns = param.split("=");
            if(paramPatterns.length==2){
                let optionKeyName = paramPatterns[0].trim().replace(/^-+/, "");
                optionsObject[optionKeyName] = paramPatterns[1].trim();
            }
        });
    }
    return optionsObject;
}


function LessPluginRpx2Rem(options) {
    this.defaultOptions = {
        ratio: 100
    };
    this.options = Object.assign(this.defaultOptions, parseOptions(options) );
}
LessPluginRpx2Rem.prototype = {
    install: function(less, pluginManager) {
        
        let options = this.options;

        pluginManager.addPostProcessor({
			process : function(css, extra){
                
                // console.log(options.ratio);

                const res = css.replace(/(\-|\+)?\d+(\.\d+)?rpx/gi,function ( $1 ){
                    // rpx值 除以 100
                    return ( parseFloat($1.replace("rpx","")) / parseFloat(options.ratio) ).toFixed(2) + "rem";
                });
				return res;
			}
		});
    },
    setOptions: function(options) { /* optional */
        this.options = Object.assign(this.defaultOptions, parseOptions(options) );
    },
    printUsage: function() { /* optional */
        console.log("");
        console.log("rpx2rem Plugin");
        console.log("specify plugin with --rpx2rem");
        console.log("You can set the 'ratio' option to control the ratio of rpx to rem (default 100).");
        console.log("eg. lessc --rpx2rem=\"ratio=75\" index.less index.css. ");
        console.log("");
    },
    minVersion: [2, 0, 0] /* optional */
}




module.exports = LessPluginRpx2Rem;