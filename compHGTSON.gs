*programa para calcular composto de JJA do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen zh.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -90 0'
'set lon 140 340'


*PSA+
'comp1=ave(z,t=19,t=21)'
'comp2=ave(z,t=124,t=126)'
'comp3=ave(z,t=340,t=342)'
'comp4=ave(z,t=415,t=417)'


*PSA-
'comp5=ave(z,t=211,t=213)'
'comp6=ave(z,t=247,t=250)'
'comp7=ave(z,t=331,t=333)'
'comp8=ave(z,t=355,t=357)'

'somapos=((comp1+comp2+comp3+comp4)/4)'

'somaneg=((comp5+comp6+comp7+comp8)/4))'

'colormaps -map y2b -levels -60 80 10'

*'d somapos'
'd somaneg'

*'draw title Anomalia de altura geopotencial (500hPa) SON PSA+'
'draw title Anomalia de altura geopotencial (500hPa) SON PSA-'

'draw xlab longitude'
'draw ylab latitude'


*'printim hgtson+.png'
'printim hgtson-.png' 
