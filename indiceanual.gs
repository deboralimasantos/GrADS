

'reinit'

*Dados
'sdfopen zh.year.ano.nc'



ti=1
tf=39
tt=ti

  while(tt<=tf)
  
    'set t 'tt

*para h1: 
   'h1'
   'a1=z'


*para h2: 
    'h2'
    'a2=z'
 


*para h3: 
    'h3'
    'a3=z'
    
    'PSA = (-a1+a2-a3)'

    
    'd PSA'

    print result
    med=subwrd(result,4)
    med=math_format("%9.3f",med)
    x=write('IPSAanual.txt',med)

    tt=tt+1
  endwhile
