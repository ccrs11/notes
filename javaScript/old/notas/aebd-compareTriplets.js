function compareTripletes(a,b){
alice=0;
bob=0;
res=[0,0];
    for(i=0;i<a.length;i++){
        if(a[i]>b[i]){
            alice++;
        } else if(a[i]<b[i]){
            bob++
        } else{
        }
    }
    res[0]=alice;
    res[1]=bob;

    return res;
}



a = [1,2,3];
b = [3,2,1];