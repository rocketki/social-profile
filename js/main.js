var gallery = $('.gallery a').simpleLightbox();


$(document).ready(function() {


	
	$('#status-form button').on('click', function() {
		var newPost = $('.form-group textarea').val();
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
							'<button class="dropdown-item" type="button">' +
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
					'<i class="far fa-thumbs-up text-primary"></i>&nbsp; <span>2323</span>' +
				'</div>' +
				'<div class="collapse" id="comment-box-1">' +
					'<div class="pt-3">' +
						'<textarea class="pl-3 form-control d-inline-block"></textarea>' +
					'</div>' +
				'</div>' +
			'</div>';

		$('.posts').prepend(post);
		$('.form-group textarea').val('');
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

});
