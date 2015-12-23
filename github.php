<?php
  // Based on: https://gist.github.com/1809044
	$commands = array(
		'echo $PWD',
		'whoami',
		'git pull',
		'git status',
		// 'git submodule sync',
		// 'git submodule update',
		// 'git submodule status',
	);

	$output = '';
	foreach($commands AS $command){
		$tmp = shell_exec($command);
		$output .= "<span class=\"prompt\">\$</span> <span class=\"command\">{$command}\n</span>";
		$output .= htmlentities(trim($tmp)) . "\n";
	}
?>
<!doctype html>
<html dir="ltr">
<head>
	<meta charset=utf-8>
	<title>Deploy</title>
  <style>
    body {
      background-color: #161616;
      color: #FFF;
    }
    .prompt {
      color: #BBB;
    }
    .command {
      color: #FFF;
    }
  </style>
</head>

<body>
  <pre>

  <?php echo $output; ?>
  </pre>
</body>
</html>
