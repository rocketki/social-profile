var gallery = $('.gallery a').simpleLightbox();


$(document).ready(function() {


	
	$('#status-form button').on('click', function(e) {
		e.preventDefault();
		var newPost = $('.form-group #status-field').val();
		if ( ! newPost) {
			return false;
		}
		
		var post = '<div class="post my-5 shadow rounded p-3">' +
				'<div class="stt-header d-flex align-items-center">' +
					'<a href="#"><img class="rounded-circle post-avt" src="img/avatar.jpg"></a>' +
					'<div class="d-inline-block ml-2">' +
						'<a class="" href="#"><h5 class="mb-0 d-inline-block">Dinh Ba Thi Sinh</h5></a>' +
						'<small>a few seconds ago</small>' +
					'</div>' +
					'<div class="btn-group ml-auto mb-auto ">' +
						'<a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
							'<i class="fas fa-ellipsis-v text-secondary"></i>' +
						'</a>' +
						'<div class="dropdown-menu dropdown-menu-right">' +
							'<button class="dropdown-item" type="button">' +
								'<i class="fas fa-fw fa-edit"></i>' +
								'Edit' +
							'</button>' +
							'<button class="dropdown-item hide" type="button">' +
								'<i class="fas fa-fw fa-eye-slash"></i>' +
								'Hidden' +
							'</button>' +
							'<button class="dropdown-item text-danger delete-post" type="button">' +
								'<i class="fas fa-fw fa-trash-alt"></i>' +
								'Delete' +
							'</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="pt-2 text-justify">' +
					'<p>' + newPost + '</p>' +
				'</div>' +
				'<hr>' +
				'<button class="btn btn-primary btn-like"><i class="fas fa-thumbs-up"></i>&nbsp;Like</button>&nbsp;' +
				'<button class="btn btn-primary btn-comment" data-toggle="collapse" data-target="#comment-box-1" aria-expanded="false" aria-controls="comment-box-1">' +
					'<i class="fas fa-comment-alt"></i>&nbsp;Comment' +
				'</button>' +
				'<div class="likes d-inline float-right">' +
					'<i class="far fa-thumbs-up text-primary"></i>&nbsp; <span>0</span>' +
				'</div>' +
				'<div class="collapse" id="comment-box-1">' +
					'<div class="pt-3">' +
						'<textarea class="pl-3 form-control d-inline-block"></textarea>' +
					'</div>' +
					'<div class="d-flex justify-content-end">' +
						'<button class="btn-primary d-flex rounded" id="send-cmt">Send</button>' +
					'</div>' +
				'</div>' +
			'</div>';
		$('.posts').prepend(post);
		$('.form-group #status-field').val('');
	});


	$('#send-cmt').on('click', function(c) {
		c.preventDefault();
		var newCmt = $(this).parents('.post').find('#comment-box-1 textarea').val();
		if ( ! newCmt) {
			return false;
		}
		var cmt = 	'<div class="user-cmt d-flex justify-content-between mt-3">' +
						'<a class="user-cmt-avt" href="#"><img src="img/avatar.jpg"></a>' +
						'<div class="user-cmt-content px-2 pt-1 d-inline-block">' +
							'<a href="#">' +
								'Sinh&nbsp;' +
							'</a>' +
							'<div class="d-inline">' + newCmt + '</div>' +
							'<section class="small">' +
								'<a class="text-secondary mr-2" href="#">Like</a>' +
								'<a class="text-secondary mr-2" href="#">Reply</a>' +
								'<a class="text-secondary mr-2" href="#"><time><i class="far fa-clock"></i>&nbsp; 12h ago</time></a>' +
							'</section>' +
						'</div>' +
						'<div class="btn-group cmt-action">' +
							'<a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
								'<i class="fas fa-ellipsis-v text-secondary"></i>' +
							'</a>' +
							'<div class="dropdown-menu dropdown-menu-right">' +
								'<button class="dropdown-item" type="button">' +
									'<i class="fas fa-fw fa-edit"></i>' +
									'Edit' +
								'</button>' +
								'<button class="dropdown-item" type="button">' +
									'<i class="fas fa-fw fa-eye-slash"></i>' +
									'Hidden' +
								'</button>' +
								'<button class="dropdown-item text-danger" type="button">' +
									'<i class="fas fa-fw fa-trash-alt"></i>' +
									'Delete' +
								'</button>' +
							'</div>' +
						'</div>' +
					'</div>';

		$(this).parents('.post').find('#comment-box-1').append(cmt)
		$(this).parents('.post').find('#comment-box-1 textarea').val('');
	});


	$(document).on('click', '.btn-like', function() {
		count_likes = $(this).parent('.post').find('.likes span')[0];
		if ($(this).hasClass('active')) {
			count_likes.innerHTML--;
		} else {
			count_likes.innerHTML++;
		}

		$(this).toggleClass('active');
	});

	$(document).on('click', '.delete-post', function() {
		$(this).parents('.post').remove();
	});

	$(document).on('click', '.hide', function() {
		count_hide = $(this).parents('.posts').find('.post');
		$(this).parents('.post').toggleClass('hidden');
	});

});