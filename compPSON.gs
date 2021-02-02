*programa para calcular composto de SON do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen p.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -60 20'
'set lon -100 -30'



*PSA+
'comp1=ave(precip,t=19,t=21)'
'comp2=ave(precip,t=124,t=126)'
'comp3=ave(precip,t=340,t=342)'
'comp4=ave(precip,t=415,t=417)'


*PSA-
'comp5=ave(precip,t=211,t=213)'
'comp6=ave(precip,t=247,t=250)'
'comp7=ave(precip,t=331,t=333)'
'comp8=ave(precip,t=355,t=357)'

'somapos=((comp1+comp2+comp3+comp4)/4)'

'somaneg=((comp5+comp6+comp7+comp8)/4))'

'colormaps -map y2b -levels -5 5 1'

'd somapos'
*'d somaneg'

'draw title Anomalia de precipitacao SON PSA+'
*'draw title Anomalia de precipitacao SON PSA-'

'draw xlab longitude'
'draw ylab latitude'


'printim pson+.png'
*'printim pson-.png' 
