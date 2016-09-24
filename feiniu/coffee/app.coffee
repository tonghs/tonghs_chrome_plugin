$(document).ready ->
	setTimeout(go, 90000)


go = ->
	if $('#form1_link_add')
		$.ajax({
			url: 'http://wiki.xrkmedia.com:9099/j/data'
			success: (data)->
				console.log 'start...'
				for i in [0..10]
					$('#form1_link_add').click()
				
				for o, i in data.li
					$("#form1_link#{i+1}").val(o.url)

				$('#form1_email').val('test@126.com')
				console.log '填充完毕，准备提交'

				$('input[type=submit].js-submit').click()
				console.log '提交'

			error: ->
		})
