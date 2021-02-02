*programa para calcular composto de MAM do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen zh.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -90 0'
'set lon 140 340'


*PSA+

'comp1=ave(z,t=61,t=63)'
'comp2=ave(z,t=121,t=123)'
'comp3=ave(z,t=133,t=135)'
'comp4=ave(z,t=193,t=195)'
'comp5=ave(z,t=253,t=255)'


*PSA-
'comp6=ave(z,t=229,t=231)'
'comp7=ave(z,t=361,t=363)'
'comp8=ave(z,t=365,t=367)'
'comp9=ave(z,t=433,t=435)'


'somapos=((comp1+comp2+comp3+comp4+comp5)/5)'

'somaneg=((comp6+comp7+comp8+comp9)/4))'
'colormaps -map y2b -levels -60 80 10'

*'d somapos'
'd somaneg'

*'draw title Anomalia de altura geopotencial (500hPa) MAM PSA+'
'draw title Anomalia de altura geopotencial (500hPa) MAM PSA-'



'printim hgtmam-.png' 
*'printim hgtmam+.png'
