exports.getSum = (arr)=>{
    return arr.reduce((acc, curr)=> acc + curr, 0);
}

exports.getAverage = (arr)=>{
    if(arr.length === 0) return 0;
    return exports.getSum(arr) / arr.length;
}

exports.removeDuplicates = (arr)=>{
    const rec = new Map();
    const output = [];
    arr.forEach(ele=>{
        if(rec.has(ele)) {
            rec.set(ele,rec.get(ele)+1);
          }
        else {
            rec.set(ele,1);
          }  
        });
    for(let k of rec) {
        output.push(k[0]);
    }    
    return output;
}

exports.intersect = (ar1,ar2)=>{
    const set = new Set(ar1);
    console.log(set.values());
    
    return Array.from(set).filter((ele)=>ar2.indexOf(ele) != -1);
}

exports.difference = (arr1,arr2)=>{
    const rec = new Map();
    const output = [];
    const comb = [...arr1,...arr2];
    comb.forEach(ele=>{
        if(rec.has(ele)) {
            rec.set(ele,rec.get(ele)+1);
          }
        else {
            rec.set(ele,1);
          }  
        });
    for(let k of rec) {
        if(k[1] === 1) {
            output.push(k[0]);
        }
    }    
    return output;
}

exports.removeBy = (arr,val)=>{
    return arr.filter(ele => ele!=val);
}

exports.shuffle = (arr)=>{
    const op = [];
    const freq = {};
    console.log("shuffling in progress...")
    arr.forEach(ele=>{
        if(freq[ele]) {
            freq[ele]++;
        }
        else {
            freq[ele] = 1;
        }
    });
    while(op.length < arr.length) {
        const val = arr[parseInt(Math.random()*arr.length)];
        if(freq[val] != 0) {
            op.push(val);
            freq[val]--;
        }
    }
    return op;
}

exports.flat = (ar) => {
    const stk = [...ar];
    const res = [];
    while(stk.length) {
        const val = stk.pop();
        if(Array.isArray(val)) {
            stk.push(...val);
        }
        else {
            res.unshift(val);
        }
    }
    return res;
}

exports.debounceAsync = (fn,delay)=>{
    let timer;
    return (...args)=>{
        return new Promise((resolve,reject)=>{
                if(timer) clearTimeout(timer);
                timer = setTimeout(async()=>{
                    try {
                        let res = await fn(...args);
                        resolve(res); 
                    }
                    catch(e) { 
                        reject(e);
                    }
            }, delay);
        })
    }
}
exports.throttleAsync = (fn,delay) => {
    let timer;
    return (...args)=>{
        return new Promise((resolve, reject) => {
            if(timer) return;
            timer = setTimeout(async ()=>{
                try {
                    let res = await fn(...args);
                    resolve(res);
                }
                catch(e) {
                    reject(e);
                    console.error(e);
                }
                timer = null;
            },delay);
        });
    }
 }


