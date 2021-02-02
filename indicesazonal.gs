

'reinit'

*Dados
'sdfopen zh.mon.ano.nc'



ti=2
tf=460
tt=ti

  while(tt<=tf)
  
    'set t 'tt

*para h1: 
   'h1'
   'a1=ave(z,t-1,t+1)'
   'd a1'

*para h2: 
    'h2'
    'a2=ave(z,t-1,t+1)'
    'd a2'
 


*para h3: 
    'h3'
    'a3=ave(z,t-1,t+1)'
    'd a3'


    'PSA = (-a1+a2-a3)'

    
    'd PSA'

    print result
    med=subwrd(result,4)
    med=math_format("%9.3f",med)
    x=write('IPSA.txt',med)

    tt=tt+3
  endwhile
