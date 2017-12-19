/*
 �L�[�{�[�h����͂������Ɉ�ԍŏ��ɌĂяo����鏈��
 */
document.body.onkeydown = function( e ) {
  // �L�[�ɖ��O���Z�b�g����
  var keys = {
    37: 'left',
    39: 'right',
    40: 'down',
    38: 'rotate'
  };

  if ( typeof keys[ e.keyCode ] != 'undefined' ) {
    // �Z�b�g���ꂽ�L�[�̏ꍇ��tetris.js�ɋL�q���ꂽ�������Ăяo��
    keyPress( keys[ e.keyCode ] );
    // �`�揈�����s��
    render();
  }
};

// �L�[�{�[�h�������ꂽ���ɌĂяo�����֐�
function keyPress( key ) {
  switch ( key ) {
  case 'left':
    if ( valid( -1 ) ) {
      --currentX;  // ���Ɉ���炷
    }
    break;
  case 'right':
    if ( valid( 1 ) ) {
      ++currentX;  // �E�Ɉ���炷
    }
    break;
  case 'down':
    if ( valid( 0, 1 ) ) {
      ++currentY;  // ���Ɉ���炷
    }
    break;
  case 'rotate':
    // ����u���b�N����
    var rotated = rotate( current );
    if ( valid( 0, 0, rotated ) ) {
      current = rotated;  // �񂹂�ꍇ�͉񂵂����Ƃ̏�Ԃɑ���u���b�N���Z�b�g����
    }
    break;
  }
}

// ����u���b�N���񂷏���
function rotate( current ) {
  var newCurrent = [];
  for ( var y = 0; y < 4; ++y ) {
    newCurrent[ y ] = [];
    for ( var x = 0; x < 4; ++x ) {
      newCurrent[ y ][ x ] = current[ 3 - x ][ y ];
    }
  }
  return newCurrent;
}