*programa para calcular composto de DJF do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen p.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -60 20'
'set lon -100 -30'


*PSA+
'comp1=ave(precip,t=22,t=24)'
'comp2=ave(precip,t=127,t=129)'


*PSA-
'comp3=ave(precip,t=214,t=216)'
'comp4=ave(precip,t=334,t=336)'
'comp5=ave(precip,t=358,t=360)'

'somapos=((comp1+comp2)/2)'

'somaneg=((comp3+comp4+comp5)/3)'

'colormaps -map y2b -levels -5 5 1'

'd somapos'
*'d somaneg'



'draw title Anomalia de precipitacao DJF PSA+'
*'draw title Anomalia de precipitacao DJF PSA-'


'draw xlab longitude'
'draw ylab latitude'

'printim pdjf+.png'
*'printim pdjf-.png' 

